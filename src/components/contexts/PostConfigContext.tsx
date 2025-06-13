'use client'

import { createContext, useState, useContext, ReactNode } from 'react'

type PostConfigContextType = {
  showAllowModal: boolean
  setShowAllowModal: (show: boolean) => void
  showMobilePostModal: boolean
  setShowMobilePostModal: (show: boolean) => void
  postOptionSelected: number | undefined
  setPostOptionSelected: (option: number | undefined) => void
}

const PostConfigContext = createContext<PostConfigContextType | undefined>(
  undefined,
)

export function PostConfigProvider({ children }: { children: ReactNode }) {
  const [showAllowModal, setShowAllowModal] = useState<boolean>(false)
  const [showMobilePostModal, setShowMobilePostModal] = useState<boolean>(false)
  const [postOptionSelected, setPostOptionSelected] = useState<
    number | undefined
  >(undefined)

  return (
    <PostConfigContext.Provider
      value={{
        showAllowModal,
        setShowAllowModal,
        showMobilePostModal,
        setShowMobilePostModal,
        postOptionSelected,
        setPostOptionSelected,
      }}
    >
      {children}
    </PostConfigContext.Provider>
  )
}

export function usePostConfig() {
  const context = useContext(PostConfigContext)

  if (context === undefined) {
    throw new Error('usePostConfig must be used within a PostConfigProvider')
  }
  return context
}
