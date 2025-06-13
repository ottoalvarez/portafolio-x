import Image from 'next/image'
import React from 'react'
import { Avatar } from '@/components/atoms'

export const TopMobile = () => {
  return (
    <div className='flex w-full justify-start items-center px-6 pt-2'>
      <div className='w-1/4 self-center'>
        <Avatar
          customClassName=''
          src='happy-active-user'
          alt='Logged user avatar'
          size={35}
        />
      </div>

      <div className='flex items-center justify-end w-3/4 gap-2'>
        <Image
          src='https://cdn.brandfetch.io/idS5WhqBbM/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1692089093721'
          alt='X brand logo'
          width={25}
          height={25}
        />
        <button className='bg-transparent hover:bg-none font-semibold border border-white/40 rounded-full py-2 px-4'>
          Obtener Premium
        </button>
      </div>
    </div>
  )
}
