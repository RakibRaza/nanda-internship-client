import React, { useState } from 'react'
import { useHistory } from 'react-router'

const SubmitForm = () => {
  const [movie, setMovie] = useState({ movieName: '', language: '', releaseDate: '', budget: '', collections: '' })
  const history = useHistory()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setMovie({ ...movie, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('https://pwr-nanda-internship-1.herokuapp.com/add-movie', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(res => res.json()).then(data => {
      if (data) history.push('/movies')
    }).catch(error => console.error(error.message))

    setMovie({ movieName: '', language: '', releaseDate: '', budget: '', collections: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
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
        </div>

        <div className="col-md-6">
          <div className="mb-2">
            <label htmlFor="budget" className="form-label">Budget:</label>
            <input type="number" value={movie.budget} onChange={handleChange} required name='budget' className="form-control" id="budget" />
          </div>

          <div className="mb-4">
            <label htmlFor="collections" className="form-label">Collections:</label>
            <input type="number" value={movie.collections} onChange={handleChange} required name='collections' className="form-control" id="collections" />
          </div>

          <button type="submit" className="btn mt-3 btn-primary">Submit</button>
        </div>
      </div>
    </form>
  )
}

export default SubmitForm
