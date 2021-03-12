import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Button from '../atoms/button/button'
import NavMenu from '../molecules/menus/navMenu'

interface Props {
  title?: string
}

// NavMenu componet can consume an array of object to render menu item
const menuItem = [
  {
    url: '/',
    text: 'Home'
  },
  {
    url: '/about',
    text: 'About'
  },
  {
    url: '/dashboard',
    text: 'Dashboard',
  }
]

const Navbar: React.FC<Props> = ({ title= 'Navbar' }) => {
  // State to show or hide Menu while on mobile deviice.
  const [menuShow, setMenuShow] = useState(false);


  return (
    <>
    <div className="flex flex-wrap items-center justify-between bg-white lg:py-4 py-3 lg:px-10 px-3">
      <div>
        <h1 className="text-xl font-medium">{ title }</h1>
      </div>
      <div className="md:invisible visible">
        <Button size="sm" variant="plain" onClick={ () => setMenuShow(!menuShow) }>
          <FontAwesomeIcon icon={ menuShow ? faTimes : faBars } />
        </Button>
      </div>
      <NavMenu menuItem={ menuItem } show={ menuShow } />
    </div>
    </>
  )
}

export default Navbar