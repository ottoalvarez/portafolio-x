import React from 'react'

import { usePostConfig } from '@/components/contexts/PostConfigContext'
import { allowPostData, AllowPostOptionType } from '@/data/allowPostData'

export const AllowPostButton = () => {
  const { setShowAllowModal, postOptionSelected } = usePostConfig()
  const allowOption: AllowPostOptionType =
    allowPostData.find((option: AllowPostOptionType) =>
      !postOptionSelected ? option.default : option.id === postOptionSelected,
    ) || allowPostData[0]

  return (
    <button
      onClick={() => setShowAllowModal(true)}
      className='bg-transparent text-[#1C96E9] hover:bg-none cursor-pointer font-semibold flex flex-row items-center gap-1'
    >
      {React.createElement(allowOption.icon)}{' '}
      {allowOption.id === 1 ? allowOption.alternativeText : allowOption.text}
    </button>
  )
}
