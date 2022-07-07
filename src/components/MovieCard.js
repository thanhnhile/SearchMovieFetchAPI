import React from 'react'
function MovieCard({ movie }) {
    return (
        <div className='movie-card'>
            <img src={movie.Poster === 'N/A' ? 'https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg' : movie.Poster}
                alt={movie.Title} />
            <div className='movie-info'>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </div>
    )
}

export default MovieCard