import { IconType } from 'react-icons'
import { GoBell, GoHome, GoSearch, GoMail, GoPeople } from 'react-icons/go'

export interface SidebarItem {
  id: number
  option: string
  icon: IconType
  mobileOnly?: boolean
  hasBadge?: boolean
  badgeCount?: number
}

export const SidebarOptionsData: SidebarItem[] = [
  {
    id: 1,
    option: 'Inicio',
    icon: GoHome,
    mobileOnly: true,
  },
  {
    id: 2,
    option: 'Explorar',
    icon: GoSearch,
    mobileOnly: true,
  },
  {
    id: 3,
    option: 'Notificaciones',
    icon: GoBell,
    mobileOnly: true,
    hasBadge: true,
    badgeCount: 3,
  },
  {
    id: 4,
    option: 'Mensajes',
    icon: GoMail,
    mobileOnly: true,
  },
  {
    id: 5,
    option: 'Comunidades',
    icon: GoPeople,
    mobileOnly: true,
  },
]
