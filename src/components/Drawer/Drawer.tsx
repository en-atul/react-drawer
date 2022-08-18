import React, {FC} from 'react'

import {DrawerProps} from '../../interfaces'
import './drawer.css'

const Drawer: FC<DrawerProps> = ({
  children,
  width = 350,
  height = 350,
  direction = 'left',
  show,
  onClose,
  drawerClassName,
  drawerStyle,
  // overlayClassName,
  // overlayStyle,
  backdrop = 'rgba(0, 0, 0, 0.45)',
}) => {
  const _direction = {
    left: {top: 0, bottom: 0, left: 0, width: show ? width : 0},
    right: {top: 0, bottom: 0, right: 0, width: show ? width : 0},
    top: {right: 0, top: 0, left: 0, height: show ? height : 0},
    bottom: {right: 0, bottom: 0, left: 0, height: show ? height : 0},
  }

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
      <div className="wrapper" style={{..._direction[direction]}}>
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
