import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/dist/client/router'
import React, { ReactNode, useState } from 'react'
import { Dropdown, DropdownBody } from '../dropdown'

interface Props {
  name?: string
  children?: ReactNode;
}

const NavLinkDropdown: React.FC<Props> = ({ name, children }) => {
  // We need to add logic to make active link for this navLink ( Head of Dropdown Link )
  // const router = useRouter()
  // // const activeClass = router.pathname === href ? 'bg-gray-100 text-blue-500' : ''
  const [showDropdown, setShowDropdown] = useState(false)

  const handleDropdown = (e: any) => {
    e.preventDefault()
    setShowDropdown(!showDropdown)
  }

  return (
    <div className="relative inline-block">
      <a type="button" className="inline-flex w-full hover:text-blue-700 md:py-1 py-2 md:px-2 px-3 rounded items-center" href="" onClick={handleDropdown} >
        <span>{ name }</span>
        <FontAwesomeIcon className="ml-2 text-xs" icon={ faChevronDown } />
      </a>
      <Dropdown show ={ showDropdown }>
        <DropdownBody>
          { children }
        </DropdownBody>
      </Dropdown>
    </div>
  )
}

export default NavLinkDropdown