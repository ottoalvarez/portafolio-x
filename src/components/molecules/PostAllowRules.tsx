import React, { useRef } from 'react'
import { usePostConfig } from '../contexts/PostConfigContext'
import { AllowPostOption } from '@/components/atoms/AllowPostOption'

import { allowPostData, AllowPostOptionType } from '@/data/allowPostData'

export const PostAllowRules = () => {
  const { setShowAllowModal, postOptionSelected } = usePostConfig()

  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShowAllowModal(false)
    }
  }

  return (
    <div
      onClick={handleClickOutside}
      className='absolute w-full h-full bg-[#5B7083]/40 z-30'
    >
      <div
        ref={modalRef}
        className='fixed bottom-0 left-0 right-0 bg-black p-4 px-6 rounded-tl-4xl rounded-tr-4xl'
      >
        <div className='flex flex-col gap-1 mb-4'>
          <h3 className='font-semibold text-lg'>¿Quiénes pueden responder?</h3>
          <p className='text-gray-400'>
            Elige quién puede responder a este post. Cualquier persona
            mencionada puede responder siempre.
          </p>

          <div className='flex flex-col gap-6 my-6'>
            {allowPostData.map((option: AllowPostOptionType) => (
              <AllowPostOption
                key={option.id}
                postOptionSelected={postOptionSelected}
                id={option.id}
                text={option.text}
                icon={option.icon}
              />
            ))}
          </div>

          <button
            onClick={() => handleClickOutside}
            className='border border-white/40 font-semibold py-3 px-6 w-full rounded-full'
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
