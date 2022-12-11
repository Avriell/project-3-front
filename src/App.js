import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'


import Movie from './Components/Movie.js'
import Add from './Components/Add.js'
import Edit from './Components//Edit.js'


function App() {

  //  const [display, setDisplay] = useState(false)
   const [movies, setMovies] = useState([])

  //Get...Calling on Movie.js file
  const getMovies = () => {
     axios.get('http://localhost:3000/movierec')
     .then((response) => setMovies(response.data), (err) => console.log(err))
     .catch((error) => console.log(error))
  }
  
  
  //Create...Calling on Add.js file
  const handleCreate = (data) => {
    console.log(data)
     axios.post('http://localhost:3000/movierec', data)
     .then((response) => {
        setMovies([...movies, response.data])
        
     })
  }

  //Edit
  const handleEdit = (data) => {
    axios.put('http://localhost:3000/movierec/' + data._id, data)
    .then((response) => {
       let newMovies = movies.map((movies) => {
        return movies._id !== data._id ? movies : data
       })
       setMovies(newMovies)
    })
 }

 //Delete
  const handleDelete = (deletedMovies) => {
     axios.delete('http://localhost:3000/movierec/' + deletedMovies._id)
     .then((response) => {
      let newMovies = movies.filter((movies) => {
        return movies._id !== response._id
       })
      setMovies(newMovies)
      getMovies()
     })
  }

  useEffect(() => {
     getMovies()
  }, [])

  return (
    <div className="container">
      
      <div className="header">
      <header>Movie Recommendations</header>
      </div>

      {/* <button onClick={() => setDisplay(!display)}>Add New Movie</button> */}

      <Add handleCreate = {handleCreate}/> 

      {movies.map((movie) => {
        return (
          <div>
            <Movie movie = {movie}/>
            <Edit movie = {movie} handleEdit = {handleEdit}/>
            <button onClick={()=> {handleDelete(movie)}}>Delete</button>
            
          </div>
        )
      })}
    </div>
  );
}

export default App;