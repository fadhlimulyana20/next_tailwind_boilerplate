import React, { ReactNode } from 'react'


interface Props {
  className?: string;
  children?: ReactNode;
  size?: 'sm' | 'lg';
  variant?: 'fill' | 'outline' | 'plain',
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<Props> = (
  { 
    className= 'font-bold rounded', 
    children, 
    size= 'lg',
    variant= 'fill',
    onClick= (e) => e.preventDefault(), 
  }
) => {
  // Button Size
  let classSize: string;
  switch (size) {
    case 'sm':
      classSize = 'py-1 px-3'
      break;
    default:
      classSize = 'py-2 px-4'
      break;
  }

  // Button variant
  let classVariant: string;
  switch (variant) {
    case 'fill':
      classVariant = 'bg-blue-500 hover:bg-blue-700 text-white'
      break;
    case 'outline':
      classVariant = 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent';
      break;
    default:
      classVariant = 'bg-transparent hover:bg-gray-100';
      break;
  }

  return (
    <button className={`${classVariant} ${classSize} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button