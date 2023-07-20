function Movie(props) {
    return <div className="Movie">
        <img src={props.movie.image} alt={props.movie.image} />
        <h2>{props.movie.name}</h2>
        <p>{props.movie.year}</p>
        <p>{props.movie.rating}</p>
        
    </div>
}

export default Movie;