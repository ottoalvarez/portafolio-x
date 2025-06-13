'use client'

import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import { useMediaQuery } from 'react-responsive'

import { SidebarItem, SidebarOptionsData } from '@/data/navbar'
import { NewPostButton } from '@/components/atoms'

const MobileSidebar = () => {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const options = SidebarOptionsData.filter(
    (option: SidebarItem) => option.mobileOnly,
  )

  if (options.length === 0) return null

  return (
    <div className='md:hidden fixed bottom-0 left-0 right-0 z-10 flex flex-col gap-4'>
      <div className='flex justify-end px-4'>
        <NewPostButton />
      </div>

      <div
        className={clsx(
          'flex flex-row justify-between gap-2 p-4 transition-colors duration-300 bg-black',
          isAtTop ? 'bg-opacity-100' : 'bg-opacity-50 backdrop-blur-sm',
        )}
      >
        {options.map((option: SidebarItem) => (
          <div
            key={option.id}
            className=' text-white self-center cursor-pointer relative'
          >
            {React.createElement(option.icon, { className: 'text-3xl' })}
            {option.hasBadge && option.badgeCount ? (
              <span className='absolute top-0 right-0 bg-[#1C96E9] text-white text-xs rounded-full px-1'>
                {option.badgeCount}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

const DesktopSidebar = () => {
  return <h1 className='text-white'>Desktop Sidebar</h1>
}

export const Sidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return isMobile ? <MobileSidebar /> : <DesktopSidebar />
}
