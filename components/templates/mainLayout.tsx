import Head from 'next/head'
import React, { ReactNode } from 'react'
import Navbar from '../organisms/navbar';

interface Props {
  children?: ReactNode,
  title?: string,
  backgroundColor?: string
  withPaddingTop?: boolean
}

const MainLayout: React.FC<Props> = ({ children, title= 'This is default title', backgroundColor= 'bg-gray-100', withPaddingTop= true }) => {
  const paddingClass = withPaddingTop ? 'pt-16' : ''

  return (
    <div className={`min-h-screen ${backgroundColor}`}>
      {/* Head Section */}
      <Head>
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Body section */}
      <Navbar />
      <div className={`container md:px-10 px-5 mx-auto ${paddingClass}`}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout;