import React from 'react'
import { IconType } from 'react-icons'

interface MetricProps {
  icon: IconType
  value?: number
}

export const Metric = ({ value, icon }: MetricProps) => {
  return (
    <div className='flex items-center gap-2 text-gray-400'>
      {React.createElement(icon, { className: 'text-xl' })}
      <span>{value}</span>
    </div>
  )
}
