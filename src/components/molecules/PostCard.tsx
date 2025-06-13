import React from 'react'
import { Avatar, UserVerified } from '@/components/atoms'
import { PostMetrics } from './PostMetrics'

interface PostCardProps {
  user: string
  username: string
  isUserVerified: boolean
  postText: string
}

export const PostCard = ({
  user,
  username,
  isUserVerified,
  postText,
}: PostCardProps) => {
  return (
    <div className='w-full flex flex-row items-start py-1 px-4 gap-2 border-b-[.7px] border-gray-400/30  first:border-b-[.7px] [&:not(:first-child)]:border-t-0'>
      <Avatar src={username} alt={user} />

      <div className='flex flex-col py-4'>
        <div className='flex flex-row items-center gap-2'>
          <span className='text-white font-semibold'>{user}</span>
          {isUserVerified && <UserVerified />}
          <span className='text-gray-400 text-md'>@{username}</span>
        </div>

        <p className='text-white'>{postText}</p>

        <PostMetrics likes={18} comments={645} reposts={913} views={2} />
      </div>
    </div>
  )
}
