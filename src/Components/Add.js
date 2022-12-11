import {useState} from 'react'

const Add = (props) => {
    const [movie, setMovie] = useState({title: '', runtime: '', review: '', img: '', link: ''})
    
    const handleChange = (event) => {
        setMovie({...movie, [event.target.name]: event.target.value} )
    }
    //event.movie.name
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(movie)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title:</label>
            <input type='text' name='title'onChange={handleChange}/> 

            <br/>

            <label htmlFor='runtime'>Runtime:</label>
            <input type='text' name='runtime' onChange={handleChange}/>

            <br/>

            <label htmlFor='review'>Review:</label>
            <input type='text' name='review' onChange={handleChange}/>

            <br/>

            <label htmlFor='img'>Img:</label>
            <input type='text' name='img' onChange={handleChange}/>

            <br/>

            <label htmlFor='link'>Link:</label>
            <input type='text' name='link' onChange={handleChange}/>

            <input type='submit'/>
        </form>
    )
}
export default Add
