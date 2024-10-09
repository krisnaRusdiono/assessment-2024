'use client'

import Box from '@/components/base/Box'
import Drawer from '@/components/base/Drawer'
import { useSidebarContext } from '@/contexts/Sidebar'
import List from '@/components/base/List'
import ListItem from '@/components/base/ListItem'
import ListItemButton from '@/components/base/ListItemButton'
import ListItemText from '@/components/base/ListItemText'
import Divider from '@/components/base/Divider'
import MENU from '@/constants/menu'
import Typography from '@/components/base/Typography'
import Link from 'next/link'

const Sidebar = () => {
  const { open, toggleOpen } = useSidebarContext()

  return (
    <Drawer open={open} onClose={toggleOpen}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleOpen}>
        <Link href="/">
          <Typography variant="body1" className="text-2xl font-semibold p-4">
            TRADE
          </Typography>
        </Link>
        <List className="py-0">
          {MENU.map(({ label, href }, index) => (
            <div key={`sidebar-${label}`}>
              {index % 2 === 0 && index !== 0 && <Divider />}
              <Link href={href}>
                <ListItem key={label} disablePadding>
                  <ListItemButton className="p-4">
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              </Link>
              {(index + 1) % 2 === 1 && <Divider />}
            </div>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default Sidebar
