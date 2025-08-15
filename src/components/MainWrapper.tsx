import React from 'react'
interface MainWrapperProps {children: React.ReactNode}
const MainWrapper = ({children}:MainWrapperProps) => {
  return (
    <div className='grid grid-col-12 items-center md:grid-cols-2 lg:grid-cols-2
     xl:grid-cols-3 nt:grid-cols-4 lg:gap-5 md:items-cente tb:gap-2.5 md:px-2 lg:px-9'>
        {children}
    </div>
  )
}

export default MainWrapper