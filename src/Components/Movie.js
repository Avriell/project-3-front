const Movie = (props) => {

    return(
        <>
        <br/>
            <h3>Title: {props.movie.title} </h3>
            <h3>Runtime: {props.movie.runtime}</h3>
            <h3>Review: {props.movie.review}</h3>
            <h3>Img: {props.movie.img}</h3>
            <a href={props.movie.link}>Link</a>
        </>
    )
}

export default Movie