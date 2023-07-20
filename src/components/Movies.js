import Movie from './Movie'

function Movies(props) {
    return <div className="Movies">
        <h1>Movies</h1>

        {props.movies.map((item, index) => {
            return <Movie movie={item} key={item.name}/>
        })}
    </div>
}

export default Movies;