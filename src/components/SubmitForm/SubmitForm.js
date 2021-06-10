import React from 'react'

const SubmitForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="movie_name" className="form-label">Movie Name:</label>
        <input type="text" name='movieName' className="form-control" id="movie_name" />
      </div>

      <div className="mb-2">
        <label htmlFor="language" className="form-label">Language:</label>
        <input type="text" name='language' className="form-control" id="language" />
      </div>

      <div className="mb-2">
        <label htmlFor="release_date" className="form-label">Release Date:</label>
        <input type="date" name='releaseDate' className="form-control" id="release_date" />
      </div>

      <div className="mb-2">
        <label htmlFor="budget" className="form-label">Budget:</label>
        <input type="number" name='budget' className="form-control" id="budget" />
      </div>

      <div className="mb-3">
        <label htmlFor="collections" className="form-label">Collections:</label>
        <input type="number" name='collections' className="form-control" id="collections" />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default SubmitForm
