import React, { useEffect, useState } from 'react'
import Movie from '../Movie/Movie'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error))
  }, [])

  const deleteMovie = (id) => {
    fetch(`http://localhost:8000/delete-movie/${id}`, { method: "DELETE" }).then((res) => res.json())
      .then((data) => {
        if (data) {
          setMovies(movies.filter((movie) => movie._id !== id));
        }
      })
      .catch((error) => console.error(error.message));
  }

  return (
    <div className='row py-4'>
      {movies.map(movie => <Movie key={movie._id} {...movie} deleteMovie={deleteMovie} />)}
    </div>
  )
}

export default Movies
