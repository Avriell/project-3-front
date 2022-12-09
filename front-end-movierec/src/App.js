import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'


import Movie from './Components/Movie.js'
import Add from './Components/Add.js'
import Edit from './Components//Edit.js'


function App() {

   const [display, setDisplay] = useState(false)
   const [movie, setMovie] = useState([])

  //Get...Calling on Movie.js file
  const getMovie = () => {
     axios.get('http://localhost:3000/movielist')
     .then((response) => setMovie(response.data), (err) => console.log(err))
     .catch((error) => console.log(error))
  }
  
  
  //Create...Calling on Add.js file
  const handleCreate = (data) => {
     axios.post('http://localhost:3000/movielist', data)
     .then((response) => {
        setMovie([...movie, response.data])
     })
  }

  //Edit
  const handleEdit = (data) => {
    axios.put('http://localhost:3000/movielist/' + data._id, data)
    .then((response) => {
       let newMovie = movie.map((movie) => {
        return movie._id !== data._id ? movie : data
       })
       setMovie(newMovie)
    })
 }

 //Delete
  const handleDelete = (deletedMovie) => {
     axios.delete('http://localhost:3000/movielist/' + deletedMovie._id)
     .then((response) => {
      let newMovie = movie.filter((movie) => {
        return movie._id !== response._id
       })
      setMovie(newMovie)
      getMovie()
     })
  }

  useEffect(() => {
     getMovie()
  }, [])

  return (
    <div className="container">
      
      <div className="header">
      <header>Movie Recommendations</header>
      </div>

      <button onClick={() => setDisplay(!display)}>Add New Movie</button>

      {display ? <Add handleCreate = {handleCreate}/> : null}

      {movie.map((movie) => {
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