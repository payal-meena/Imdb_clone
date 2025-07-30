import React from 'react'

function Pagination({page  , handlePrev , handleNext}) {
  return (
    <div className='bg-gray-400 p-3 mt-7 flex justify-center gap-6 font-bold'>
        <div onClick={handlePrev} className='hover:cursor-pointer'><i className="fa-solid fa-arrow-left"></i></div>
        <div>{page}</div>
        <div onClick={handleNext} className='hover:cursor-pointer'><i className="fa-solid fa-arrow-right"></i></div>

    </div>
  )
}

export default Pagination