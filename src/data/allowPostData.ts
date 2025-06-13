import { IconType } from 'react-icons'
import { BiWorld } from 'react-icons/bi'
import { PiUserCheck } from 'react-icons/pi'
import { GoVerified } from 'react-icons/go'
import { MdAlternateEmail } from 'react-icons/md'

export interface AllowPostOptionType {
  id: number
  text: string
  alternativeText?: string
  icon: IconType
  default?: boolean
}

export const allowPostData: AllowPostOptionType[] = [
  {
    id: 1,
    text: 'Todos',
    alternativeText: 'Cualquier persona puede responder',
    icon: BiWorld,
    default: true,
  },
  {
    id: 2,
    text: 'Cuentas a las que sigues',
    icon: PiUserCheck,
  },
  {
    id: 3,
    text: 'Cuentas verificadas',
    icon: GoVerified,
  },
  {
    id: 4,
    text: 'Solo las cuentas que menciones',
    icon: MdAlternateEmail,
  },
]
