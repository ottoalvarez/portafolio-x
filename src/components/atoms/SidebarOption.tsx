import React from 'react'
import { IconType } from 'react-icons'

interface SidebarOptionProps {
  option: string
  icon: IconType
}

export const SidebarOption = ({ option, icon }: SidebarOptionProps) => {
  return (
    <div className='flex text-white items-center gap-2 p-2 cursor-pointer'>
      {React.createElement(icon, { className: 'text-xl' })}
      <span className='text-base'>{option}</span>
    </div>
  )
}
