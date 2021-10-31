import './App.css';

function App() {
  return (
    <div className="App">
      <div className="movie_review_form">

        <h1>CRUD Application</h1>
        <h4>soon to be nrwl project management system</h4>
        <h5>remote mysql integration</h5>

        <div>
          <label htmlFor="movie_name">Movie Name</label>
          <input type="text" id="movie_name" name="movie_name" />
        </div>
        
        <div>
          <label htmlFor="movie_review">Movie Review</label>
          <input type="text" id="movie_review" name="movie_review" />
        </div>
        
        <div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
