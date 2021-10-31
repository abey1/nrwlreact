import React, {useState} from "react"
import './App.css';
import Axios  from 'axios'

function App() {

  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('')

  const submitReview = () => {
    Axios.post("https://nrwl-server.herokuapp.com/api/insert",{
      movieName: movieName,
      movieReview: review,
    }).then(() => {
      alert('successful insert')
    })
  }

  return (
    <div className="App">
      <div className="movie_review_form">

        <h1>CRUD Application</h1>
        <h4>soon to be nrwl project management system</h4>
        <h5>remote mysql integration</h5>

        <div>
          <label htmlFor="movie_name">Movie Name</label>
          <input type="text" id="movie_name" name="movie_name" onChange={(e)=>{
            setMovieName(e.target.value)
          }}/>
        </div>
        
        <div>
          <label htmlFor="movie_review">Movie Review</label>
          <input type="text" id="movie_review" name="movie_review" onChange={(e)=>{
            setReview(e.target.value)
          }}/>
        </div>
        
        <div>
          <button onClick={submitReview}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
