import Image from 'next/image'
import React from 'react'

export const Loader = () => {
  return (
    <div className='w-screen h-screen bg-black absolute left-0 top-0'>
      <div className='flex items-center justify-center h-full'>
        <Image
          src='https://cdn.brandfetch.io/idS5WhqBbM/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1692089093721'
          alt='X brand logo'
          width={80}
          height={80}
        />
      </div>
    </div>
  )
}
