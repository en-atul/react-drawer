import React, {FC} from 'react'

import {DrawerProps} from '../../interfaces'

const Drawer: FC<DrawerProps> = ({
  children,
  width = 250,
  direction = 'left',
  show,
  onClose,
  drawerClassName,
  drawerStyle,
  overlayClassName,
  overlayStyle,
}) => {
  const overlayClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    onClose()
  }
  return (
    <>
      {show ? (
        <section
          style={{
            width: '100%',
            height: '100vh',
            background: '#2a2a2a5c',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            ...overlayStyle,
          }}
          className={overlayClassName}
          onClick={overlayClick}
        />
      ) : null}
      <div
        style={{
          height: '100%',
          background: '#fff',
          position: 'fixed',
          top: 0,
          [direction]: 0,
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
          width: show ? width : 0,
          display: show ? 'block' : 'none',
          zIndex: 999,
          ...drawerStyle,
        }}
        className={drawerClassName}
      >
        {children}
      </div>
    </>
  )
}

export default Drawer
