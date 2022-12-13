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
    <>
      <div className="header">
      <header>
      <img className="backgroundimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OCusHEe21ILJPmV022KgtsowWlqOblv60Q&usqp=CAU"></img>
      <h3 className="titleMR">Movie Recommendation</h3>
      </header>
      </div>
      <h1>WELCOME TO THE MOVIE ZONE</h1>
      <div className="container">
      
      <Add className="add" handleCreate = {handleCreate}/> 

      {movies.map((movie) => {
        return (
          <>
           <div className="card">
              <Movie movie = {movie}/>
         
              <Edit movie = {movie} handleEdit = {handleEdit}/>
           
              <button onClick={()=> {handleDelete(movie)}}>Delete</button>
            </div>
            
         </>
        )
      })}
      <br/>
      </div>
      <div className="footer">
  
      <a className="emaillink" href="mailto:email@example.com">Contact Us <br/> Tell us your favorite Movies!</a>
      
      </div>
    
    </>
  );
}

export default App;