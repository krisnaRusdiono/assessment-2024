'use client'

import { ReactNode } from 'react'
import Sidebar from '@/components/ui/Sidebar'
import Toolbar from '@/components/ui/Toolbar'
import Footer from '@/components/ui/Footer'
import { SidebarContextProvider } from '@/contexts/Sidebar'
import { SessionProvider } from 'next-auth/react'
import { SWRConfig } from 'swr'
import defaultFetcher from '@/utils/fetcher'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <SWRConfig
        value={{
          fetcher: defaultFetcher,
          shouldRetryOnError: false,
          revalidateOnFocus: false,
        }}
      >
        <SidebarContextProvider>
          <Sidebar />
          <div className="px-8 min-h-screen h-auto">
            <Toolbar />
            {children}
            <Footer />
          </div>
        </SidebarContextProvider>
      </SWRConfig>
    </SessionProvider>
  )
}

export default MainLayout
