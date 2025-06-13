import React from 'react'
import { IconType } from 'react-icons'
import { FaCheck } from 'react-icons/fa6'
import { usePostConfig } from '../contexts/PostConfigContext'

interface AllowPostOptionProps {
  id: number
  icon: IconType
  text: string
  postOptionSelected?: number
}

export const AllowPostOption = ({
  id,
  icon,
  text,
  postOptionSelected,
}: AllowPostOptionProps) => {
  const { setShowAllowModal, setPostOptionSelected } = usePostConfig()

  const handleClick = () => {
    setPostOptionSelected(id)
    setShowAllowModal(false)
  }

  return (
    <div
      className='flex flex-row justify-start items-center gap-4 cursor-pointer'
      onClick={handleClick}
    >
      <div className='p-3 bg-[#1C96E9] rounded-full'>
        {React.createElement(icon, { className: 'text-xl' })}
      </div>
      <span className='text-white font-semibold'>{text}</span>
      {((!postOptionSelected && id === 1) || postOptionSelected === id) && (
        <FaCheck className='text-[#1C96E9] absolute right-6 mr-2' />
      )}
    </div>
  )
}
