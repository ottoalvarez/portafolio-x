import Image from 'next/image'
import React from 'react'

interface AvatarProps {
  src: string
  alt: string
  size?: number
  customClassName?: string
}

export const Avatar = ({
  src,
  alt,
  size = 50,
  customClassName = 'mt-2',
}: AvatarProps) => {
  return (
    <Image
      src={`https://api.dicebear.com/9.x/dylan/svg?seed=${src}&size=${size}`}
      alt={alt}
      className={`${customClassName} rounded-full`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  )
}
