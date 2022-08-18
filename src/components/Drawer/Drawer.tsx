import React, {FC} from 'react'

import {DrawerProps} from '../../interfaces'
import './drawr.css'

const Drawer: FC<DrawerProps> = ({
  children,
  width = 350,
  direction = 'left',
  show,
  onClose,
  drawerClassName,
  drawerStyle,
  // overlayClassName,
  // overlayStyle,
  backdrop = 'rgba(0, 0, 0, 0.45)',
}) => {
  const overlayClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    onClose()
  }
  return (
    <div className="drawer" tabIndex={-1}>
      <div
        className={show ? 'drawer-mask-active' : 'drawer-mask-close'}
        style={{background: backdrop}}
        onClick={overlayClick}
      />
      <div
        tabIndex={0}
        aria-hidden="true"
        data-sentinel="start"
        className="start"
      />
      <div
        className="wrapper"
        style={{width: show ? width : 0, [direction]: 0}}
      >
        <div
          className={`drawer-content ${drawerClassName}`}
          aria-modal="true"
          role="dialog"
          style={drawerStyle}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Drawer
