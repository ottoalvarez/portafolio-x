import React from 'react'

interface TextAreaInputProps {
  placeholder?: string
  rows?: number
}

export const TextAreaInput = ({ placeholder, rows }: TextAreaInputProps) => {
  return (
    <textarea
      placeholder={placeholder || '¿Qué está pasando?'}
      className='resize-none p-0 w-full focus:outline-none active:outline-none active:border-0 whitespace-pre-wrap overflow-hidden relative text-2xl font-light bg-transparent focus:border-0 text-white font-roboto'
      rows={rows || 3}
    ></textarea>
  )
}
