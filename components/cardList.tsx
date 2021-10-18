import React from 'react'

const CardList = ({ children }: any) => {
  return (
    <div className='flex flex-col justify-between'>
      {children}
    </div>
  )
}

export default CardList
