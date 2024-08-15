import React from 'react'
import disney from "/public/img/disney.png"
import Marvel from "/public/img/marvel.png"
import Pixar from "/public/img/pixar.png"
import Starwars from "/public/img/starwar.png"
import Natgeo from "/public/img/nationalG.png"

import disneyvid from "/public/Videos/disney.mp4"
import marvelvid from "/public/Videos/marvel.mp4"
import pixarvid from "/public/Videos/pixar.mp4"
import starwarsvid from "/public/Videos/star-wars.mp4"
import natgeovid from "/public/Videos/national-geographic.mp4"
function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyvid
        },
        {
            id:2,
            image:Pixar,
            video:pixarvid
        },
        {
            id:3,
            image:Marvel,
            video:marvelvid
        },
        {
            id:4,
            image:Starwars,
            video:starwarsvid
        },
        {
            id:5,
            image:Natgeo,
            video:natgeovid
        },
    ]
  return (
        <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
            {productionHouseList.map((item)=>(
                <div className='border-[2px] border-gray-600
                rounded-lg hover:scale-110 transition-all duration-300
                ease-in-out cursor-pointer relative shadow-xl 
                shadow-gray-800
                '>
                     <video src={item.video} autoPlay loop playsInline muted 
                className='absolute z-0  top-0 rounded-md 
                opacity-0 hover:opacity-50'/> 
                    <img src={item.image} className='w-full z-[1] opacity-100' /> 
                   
                </div>
            ))}
        </div>
      
  )
}

export default ProductionHouse