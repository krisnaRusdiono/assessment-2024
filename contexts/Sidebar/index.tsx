'use client'

import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

export interface SiderbarContextTypes {
  open: boolean
  toggleOpen: () => void
}

const SiderbarContext = createContext<SiderbarContextTypes | undefined>(
  undefined
)

const SidebarContextProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  }

  const sidebarContextValue: SiderbarContextTypes = useMemo(
    () => ({
      open,
      toggleOpen,
    }),
    [open, toggleOpen]
  )

  return (
    <SiderbarContext.Provider value={sidebarContextValue}>
      {children}
    </SiderbarContext.Provider>
  )
}

const useSidebarContext = () => {
  const context = useContext(SiderbarContext)

  if (!context) {
    throw new Error(
      '"useSidebarContext" must be used within "SidebarContextProvider"'
    )
  }

  return context
}

export { SidebarContextProvider, useSidebarContext }
