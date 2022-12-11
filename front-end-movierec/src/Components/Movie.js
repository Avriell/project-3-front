const Movie = (props) => {

    return(
        <>
            <h3>Title: {props.data.title} </h3>
            <h3>Runtime: {props.data.runtime}</h3>
            <h3>Review: {props.data.review}</h3>
            <h3>Img: {props.data.img}</h3>
            <a href={props.data.link}>Link</a>
        </>
    )
}

export default Movie