import React from 'react'

const Movie = ({ _id, movieName, language, releaseDate, budget, collections, deleteMovie }) => {
  return (
    <div className='col-md-4'>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Movie Name <strong>{movieName}</strong>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Language <strong>{language}</strong>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Release Date <strong>{releaseDate}</strong>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Budget <strong>{budget}</strong>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Collections <strong>{collections}</strong>
          </li>
        </ul>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <a href="#" onClick={() => deleteMovie(_id)} class="btn btn-danger">Delete</a>
            <a href="#" class="btn btn-warning">Update</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
