// 'use client'

import { NavLink, NavLinkProps } from 'react-router-dom'
import { motion } from 'framer-motion'

interface AnimatedNavLinkProps extends NavLinkProps {
  name: string
}

export function AnimatedNavLink({ to, name, ...props }: AnimatedNavLinkProps) {
  return (
    <NavLink
      to={to}
      className={() =>
        `text-navy-500 transition-opacity duration-200 py-2 relative`
      }
      {...props}
    >
      {({ isActive }) => (
        <>
          {name}
          <motion.div
            className="relative top-2 left-0 right-0 h-0.5 bg-red-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isActive ? 1 : 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            style={{
              originX: 0.5,
            }}
          />
        </>
      )}
    </NavLink>
  )
}