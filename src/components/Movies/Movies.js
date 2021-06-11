import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Movie from '../Movie/Movie'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const history = useHistory()
  const fetchMovies = () => {
    fetch('https://pwr-nanda-internship-1.herokuapp.com/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const deleteMovie = (id) => {
    fetch(`https://pwr-nanda-internship-1.herokuapp.com/delete-movie/${id}`, { method: "DELETE" }).then((res) => res.json())
      .then((data) => {
        if (data) {
          setMovies(movies.filter((movie) => movie._id !== id));
        }
      })
      .catch((error) => console.error(error.message));
  }

  const updateMovie = (id, movie) => {
    fetch(`https://pwr-nanda-internship-1.herokuapp.com/update-movie/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(movie),
    }).then(res => res.json()).then(data => {
      if (data) {
        fetchMovies();
        return true
      }
    }).catch(error => console.error(error))
  }

  return (
    <div className='row py-4 gy-4'>
      {movies.map(movie => <Movie key={movie._id} movie={movie} deleteMovie={deleteMovie} updateMovie={updateMovie} />)}
    </div>
  )
}

export default Movies
