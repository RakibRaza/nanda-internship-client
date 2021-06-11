import React, { useState } from 'react'
import UpdateForm from '../UpdateForm/UpdateForm'

const Movie = ({ movie, updateMovie, deleteMovie }) => {
  const { _id, movieName, language, releaseDate, budget, collections } = movie
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className='col-md-4'>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Movie Name <strong>{movieName}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Language <strong>{language}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Release Date <strong>{releaseDate}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Budget <strong>{budget}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Collections <strong>{collections}</strong>
            </li>
          </ul>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <button onClick={() => deleteMovie(_id)} className="btn btn-danger">Delete</button>
              <button className="btn btn-warning" onClick={() => setIsModalOpen(true)}>Update</button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <UpdateForm {...movie} setIsModalOpen={setIsModalOpen} updateMovie={updateMovie} />}
    </>
  )
}

export default Movie
