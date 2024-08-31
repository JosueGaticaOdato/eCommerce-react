import React from 'react'

//Visualizacion similar en todas las paginas
export const Layout = ({children}) => {
  return (
    <div className='flex flex-col items-center mt-20'>
        {children}
    </div>
  )
}
