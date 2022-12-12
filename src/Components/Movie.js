const Movie = (props) => {

    return(
        <>
<<<<<<< HEAD
            <img src={props.movie.img}/>
=======
        <br/>
>>>>>>> 8be6165da77d8abeaf664f0c048925388b31eac0
            <h3>Title: {props.movie.title} </h3>
            <h3>Runtime: {props.movie.runtime}</h3>
            <p>Review: {props.movie.review}</p>
            <a href={props.movie.link}>Trailer</a>
        </>
    )
}

export default Movie