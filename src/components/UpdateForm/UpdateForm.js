import React, { useEffect, useRef, useState } from 'react'
import './UpdateForm.css'

const UpdateForm = ({ setIsModalOpen, _id, movieName, language, releaseDate, budget, collections, updateMovie }) => {
  const wrapperRef = useRef(null)
  const [movie, setMovie] = useState({ movieName, language, releaseDate, budget, collections })

  const handleModalClose = (e) => {
    if (e.target === wrapperRef.current) {
      setIsModalOpen(false)
    }
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setMovie({ ...movie, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    updateMovie(_id, movie)
    setIsModalOpen(false)
  }

  return (
    <div ref={wrapperRef} onClick={handleModalClose} className="movie_modal">
      <div className="modal_form">
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
      </div>

    </div>


  )
}

export default UpdateForm
