import React from 'react'
import { DropdownBodyProps, DropdownProps } from './interface'

export const Dropdown: React.FC<DropdownProps> = ({ children, show }) => {
  const showClass = show ? '' : 'hidden'

  return (
    <div className={`absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-40 ${ showClass }`}>
      { children }
    </div>
  )
}

export const DropdownBody: React.FC<DropdownBodyProps> = ({ children }) => {
  return (
    <div className="px-2 py-2 bg-white rounded-md shadow relative">
      { children }
    </div>
  )
}