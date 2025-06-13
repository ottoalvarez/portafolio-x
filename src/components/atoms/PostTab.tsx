import React from 'react'

interface PostTabProps {
  id: number
  text: string
  active: boolean
  setActiveTab: (id: number) => void
}

export const PostTab = ({ id, text, active, setActiveTab }: PostTabProps) => {
  return (
    <div
      onClick={() => setActiveTab(id)}
      className='w-full flex justify-center border-b-[1px] border-white/30'
    >
      <div className='relative flex items-center justify-center  h-[50px] cursor-pointer'>
        <span
          className={`text-md ${
            active ? 'font-semibold text-white' : 'text-gray-400'
          }`}
        >
          {text}
        </span>
        {active && (
          <div className='absolute bottom-0 left-0 w-full h-[4px] bg-[#1C96E9] rounded-full' />
        )}
      </div>
    </div>
  )
}
