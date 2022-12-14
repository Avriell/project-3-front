const Movie = (props) => {
console.log(props.movie.trailer)
    return(
        <>
            <img className="imgcard w-100" src={props.movie.img}/>
            <h3 className="h3title"> {props.movie.title} </h3>
            <h3 className="h3runtime">Runtime: {props.movie.runtime}</h3>
            <p className="h3review">Review: {props.movie.review}</p>
            <a className="h3trailer" href={props.movie.trailer}>Trailer</a>
        </>
    )
}

export default Movie