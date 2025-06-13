import React, { useState } from 'react'
import { PostTab } from '@/components/atoms'

export const PostTabs = () => {
  const tabs = [
    { id: 1, text: 'Para ti' },
    { id: 2, text: 'Siguiendo' },
  ]

  const [activeTab, setActiveTab] = useState<number>(1)

  return (
    <div className='flex flex-row w-full justify-between'>
      {tabs.map(tab => (
        <PostTab
          setActiveTab={setActiveTab}
          id={tab.id}
          key={tab.id}
          text={tab.text}
          active={activeTab === tab.id}
        />
      ))}
    </div>
  )
}
