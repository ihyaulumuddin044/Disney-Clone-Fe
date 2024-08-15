import React from 'react'

// mengambil properti dari header.jsx
function HeaderItem({name,icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[18px] cursor-pointer font-semibold hover:underline underline-offset-8 mb- px-4 py-3'>
        {icon}
        {/* hidden name untuk menyembunyakan ketika navbar mengecil */}
    <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem