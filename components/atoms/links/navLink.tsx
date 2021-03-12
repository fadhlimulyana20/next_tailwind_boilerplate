import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { ReactNode } from 'react'


interface Props {
  children?: ReactNode;
  href?: string;
}

// We need to add color variant for this component
const NavLink: React.FC<Props> = ({ children, href= '#' }) => {
  const router = useRouter()
  const activeClass = router.pathname === href ? 'bg-gray-100 text-blue-500' : ''

  return (
    <Link href={href} >
      <a className={`hover:text-blue-700 md:py-1 py-2 md:px-2 px-3 rounded ${activeClass}`} >
        { children }
      </a>
    </Link>
  )
}

export default NavLink