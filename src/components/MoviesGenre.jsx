import React from 'react'
import GenreList from '../constant/GenreList'
import MoviesList from './MoviesList'

function MoviesGenre() {

    //mengambil data film yang sedang tren dari API berdasarkan genre.
  return (
    <div >
      {GenreList.Genre.map((item,index)=> index<=5 &&( 
        <div className='p-8 px-8 md:px-16'> 
          <h2 className='text-white text-[20px] text-bold mb-2'>{item.name}</h2>
          <MoviesList GenreId={item.id} index_={index}/>
        </div>
      ))}
    </div>
  )
}

export default MoviesGenre
