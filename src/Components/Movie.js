const Movie = (props) => {

    return(
        <>
            <img src={props.movie.img}/>
            <h3>Title: {props.movie.title} </h3>
            <h3>Runtime: {props.movie.runtime}</h3>
            <p>Review: {props.movie.review}</p>
            <a href={props.movie.trailer}>Trailer</a>
        </>
    )
}

export default Movie