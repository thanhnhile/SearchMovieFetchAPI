import React from 'react'
import MovieCard from './MovieCard'

function MovieList({list}) {
  return (
    <ul className='movie-list container'>
        {
            list.map((movie,index)=>{
                return (
                    <li key={index}>
                        <MovieCard movie={movie}/>
                    </li> 
                )
            })
        }
    </ul>
  )
}

export default MovieList