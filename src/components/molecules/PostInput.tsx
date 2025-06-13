import React from 'react'

import { Avatar, TextAreaInput, AllowPostButton } from '@/components/atoms'

interface PostInputProps {
  avatarSize?: number
}

export const PostInput = ({ avatarSize }: PostInputProps) => {
  return (
    <>
      <div className='w-full flex flex-row items-start gap-4 py-2 px-6'>
        <Avatar
          size={avatarSize}
          src='happy-active-user'
          alt='Logged user avatar'
        />

        <div className='flex flex-col justify-start items-start py-4 gap-4 w-full'>
          <TextAreaInput rows={1} />
          <AllowPostButton />
        </div>
      </div>
    </>
  )
}
