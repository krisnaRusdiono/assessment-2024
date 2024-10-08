'use client'

import { ReactNode } from 'react'
import Sidebar from '@/components/ui/Sidebar'
import Toolbar from '@/components/ui/Toolbar'
import Footer from '@/components/ui/Footer'
import { SidebarContextProvider } from '@/contexts/Sidebar'
import { SessionProvider } from 'next-auth/react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <SidebarContextProvider>
        <Sidebar />
        <div className="px-8 min-h-screen h-auto">
          <Toolbar />
          {children}
          <Footer />
        </div>
      </SidebarContextProvider>
    </SessionProvider>
  )
}

export default MainLayout
