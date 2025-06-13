import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'

import { PostInput } from './PostInput'
import { usePostConfig } from '../contexts/PostConfigContext'

export const PostInputModal = () => {
  const { setShowMobilePostModal } = usePostConfig()
  return (
    <div className='absolute w-full h-full bg-black z-20'>
      <div className='flex flex-col w-full'>
        <div className='flex flex-row p-4 justify-start items-center'>
          <div className='w-1/4 text-white'>
            <IoArrowBackOutline
              className='cursor-pointer'
              size={'1.3em'}
              onClick={() => setShowMobilePostModal(false)}
            />
          </div>
          <div className='w-3/4 flex flex-row justify-end items-center gap-6'>
            <button className='cursor-pointer bg-transparent hover:bg-none text-[#1C96E9] font-semibold'>
              Borradores
            </button>
            <button
              onClick={() => setShowMobilePostModal(false)}
              className='cursor-pointer rounded-full text-white py-2 px-6 bg-[#1C96E9] font-semibold'
            >
              Postear
            </button>
          </div>
        </div>
        <PostInput avatarSize={35} />
      </div>
    </div>
  )
}
