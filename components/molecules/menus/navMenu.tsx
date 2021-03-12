import React from 'react'
import LinkBlock from '../../atoms/links/linkBlock';
import NavLink from '../../atoms/links/navLink'
import NavLinkDropdown from '../../atoms/links/navLinkDropdown';

interface menuItem {
  url: string;
  text: string;
  subMenuItem?: menuItem[] // this is going to be a dropdown item in nav menu
}

interface Props {
  menuItem: menuItem[];
  show?: boolean;
}

const NavMenu: React.FC<Props> = ({ menuItem, show }) => {
  const showClass: string = show ? '' : 'hidden';

  return (
    <ul className={`list-none flex md:flex-row flex-col md:flex-grow-0 flex-grow md:w-auto w-full md:space-x-4 md:mt-0 mt-3 md:inline ${showClass} transition duration-500 ease-in-out`}>
      { menuItem.map((item, index) => {
        // if menu Item has sub item, return NavLinkDropdown component
        if(item.subMenuItem){
          return (
            <NavLinkDropdown name={ item.text } key={ index }>
              { item.subMenuItem?.map((subItem, index) => (
                <LinkBlock href={ subItem.url } key={ index }>{ subItem.text }</LinkBlock>
              )) }
            </NavLinkDropdown>
          )
        }

        // Else, return a NavLink component. Literally a normal nav-link component
        return (
          <NavLink href={item.url} key={index}>
            { item.text }
          </NavLink>
        )
      }) }
        {/* <div className="relative inline-block">
          <a type="button" className="inline-flex w-full hover:text-blue-700 md:py-1 py-2 md:px-2 px-3 rounded items-center" href="" onClick={handleDropdown} >
            <span>Dropdown</span>
            <FontAwesomeIcon className="ml-2 text-xs" icon={ faChevronDown } />
          </a>
          <div className={`absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 ${dropdown}`}>
            <div className="px-2 py-2 bg-white rounded-md shadow relative">
              <a href="" className="hover:bg-gray-100 block px-2 py-1 rounded">Item</a>
            </div>
          </div>
        </div> */}
      <NavLinkDropdown name='Dropdown'>
        <LinkBlock>Item</LinkBlock>
      </NavLinkDropdown>
    </ul>
  )
}

export default NavMenu