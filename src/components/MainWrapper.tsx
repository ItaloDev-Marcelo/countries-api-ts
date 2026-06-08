import React from 'react'
interface MainWrapperProps {children: React.ReactNode}
const MainWrapper = ({children}:MainWrapperProps) => {
  return (
    <main className='grid grid-col-12 items-center md:grid-cols-2 lg:my-19 md:gap-5 lg:grid-cols-2 px-3
     xl:grid-cols-3 nt:grid-cols-4  lg:gap-5 md:items-cente tb:gap-2.5 md:px-2 lg:px-9'>
        {children}
    </main>
  )
}

export default MainWrapper