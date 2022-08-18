import React, {CSSProperties} from 'react'

export interface DrawerProps {
  children: React.ReactNode
  show: boolean
  onClose: () => void
  overlayClassName?: string
  overlayStyle?: CSSProperties
  drawerClassName?: string
  drawerStyle?: CSSProperties
  width?: string | number
  direction?: 'left' | 'right'
  backdrop?: string
}
