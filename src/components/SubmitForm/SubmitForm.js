import React, { useState } from 'react'

const SubmitForm = () => {
  const [movie, setMovie] = useState({ movieName: '', language: '', releaseDate: '', budget: '', collections: '' })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setMovie({ ...movie, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:8000/add-movie', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(res => res.json()).then(data => console.log(data)).catch(error => console.error(error.message))

    setMovie({ movieName: '', language: '', releaseDate: '', budget: '', collections: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="movie_name" className="form-label">Movie Name:</label>
        <input type="text" value={movie.movieName} onChange={handleChange} required name='movieName' className="form-control" id="movie_name" />
      </div>

      <div className="mb-2">
        <label htmlFor="language" className="form-label">Language:</label>
        <input type="text" value={movie.language} onChange={handleChange} required name='language' className="form-control" id="language" />
      </div>

      <div className="mb-2">
        <label htmlFor="release_date" className="form-label">Release Date:</label>
        <input type="date" value={movie.releaseDate} onChange={handleChange} required name='releaseDate' className="form-control" id="release_date" />
      </div>

      <div className="mb-2">
        <label htmlFor="budget" className="form-label">Budget:</label>
        <input type="number" value={movie.budget} onChange={handleChange} required name='budget' className="form-control" id="budget" />
      </div>

      <div className="mb-3">
        <label htmlFor="collections" className="form-label">Collections:</label>
        <input type="number" value={movie.collections} onChange={handleChange} required name='collections' className="form-control" id="collections" />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default SubmitForm
