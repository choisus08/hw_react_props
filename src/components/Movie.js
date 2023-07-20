function Movie(props) {
    return <div className="Movie">
        
        <h2>{props.movie.name}</h2>
        <p>{props.movie.year}</p>
        <p>{props.movie.rating}</p>
        <img src={props.movie.image} alt={props.movie.image} />
        
    </div>
}

export default Movie;