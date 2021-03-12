import Link from 'next/link'
import React from 'react'
import { LinkBlockProps } from './interface'

const LinkBlock: React.FC<LinkBlockProps> = ({ href='#', children }) => {
  return (
    <Link href={ href }>
      <a href="" className="hover:bg-gray-100 block px-2 py-1 rounded">{ children }</a>
    </Link>
  )
}

export default LinkBlock