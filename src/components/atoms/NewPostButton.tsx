import React from 'react'
import { BsFeather } from 'react-icons/bs'
import { usePostConfig } from '../contexts/PostConfigContext'

export const NewPostButton = () => {
  const { setShowMobilePostModal } = usePostConfig()

  return (
    <div
      onClick={() => setShowMobilePostModal(true)}
      className='
        bg-[#1C96E9] 
        w-14 h-14 
        text-white 
        rounded-full 
        p-4 
        flex items-center justify-center 
        cursor-pointer 
        fill-cyan-500 drop-shadow-sm drop-shadow-white/50
      '
    >
      <BsFeather className='text-xl' />
    </div>
  )
}
