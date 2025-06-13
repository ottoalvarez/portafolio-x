'use client'

import { useCallback, useEffect, useState } from 'react'

import {
  PostAllowRules,
  PostCard,
  PostInput,
  PostInputModal,
  PostTabs,
  TopMobile,
} from '@/components/molecules'
import postData from '@/data/posts.json'
import { usePostConfig } from '@/components/contexts/PostConfigContext'
import { useMediaQuery } from 'react-responsive'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'

interface Post {
  id: number
  user: string
  username: string
  postdate: string
  posttext: string
  likes: number
  share: number
  comments: number
  views: number
}

export default function Home() {
  const { showAllowModal, showMobilePostModal } = usePostConfig()
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const [posts, setPosts] = useState<Post[]>(postData.slice(0, 10))
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const fetchMorePosts = useCallback(async () => {
    if (isLoading || !hasMore) return

    setIsLoading(true)

    await new Promise(resolve => setTimeout(resolve, 500))

    const newPosts = postData.slice(posts.length, posts.length + 10)
    setPosts(prevPosts => [...prevPosts, ...newPosts])

    if (posts.length + newPosts.length >= postData.length) {
      setHasMore(false)
    }

    setIsLoading(false)
  }, [posts.length, hasMore, isLoading])

  const observerRef = useInfiniteScroll(fetchMorePosts)

  useEffect(() => {
    if (showAllowModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showAllowModal])

  return (
    <>
      {showAllowModal && <PostAllowRules />}
      {showMobilePostModal && <PostInputModal />}
      {isMobile && <TopMobile />}
      <PostTabs />

      <div className='w-full'>
        {!isMobile && <PostInput />}

        <div className='flex flex-col'>
          {posts.map(post => (
            <PostCard
              key={post.id}
              user={post.user}
              username={post.username}
              isUserVerified={true}
              postText={post.posttext}
            />
          ))}

          {hasMore && (
            <div
              ref={observerRef}
              className='h-20 flex items-center justify-center'
            >
              {isLoading && (
                <div className='text-white p-4 text-center'>
                  Cargando más posts...
                </div>
              )}
            </div>
          )}

          {!hasMore && (
            <div className='text-white p-4 text-center'>
              No hay más posts disponibles
            </div>
          )}
        </div>
      </div>
    </>
  )
}
