'use client'

import Typography from '@/components/base/Typography'
import Button from '@/components/base/Button'
import { Menu, MenuOpen } from '@mui/icons-material'
import { useSidebarContext } from '@/contexts/Sidebar'
import MENU from '@/constants/menu'
import Link from 'next/link'

const Toolbar = () => {
  const { open, toggleOpen } = useSidebarContext()

  return (
    <div className="flex items-center md:justify-between p-4">
      <Button
        variant="text"
        onClick={toggleOpen}
        className="flex items-center md:hidden"
      >
        {open ? <MenuOpen /> : <Menu />}
      </Button>
      <Link href="/">
        <Typography variant="body1" className="text-2xl font-semibold">
          TRADE
        </Typography>
      </Link>
      <div className="hidden md:flex justify-center w-full gap-4">
        {MENU.map(({ label, href }) => (
          <Link href={href} key={`toolbar-${label}`}>
            <Typography className="text-nowrap px-4">{label}</Typography>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Toolbar
