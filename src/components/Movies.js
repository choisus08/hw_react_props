import Movie from './Movie'  // don't know why './Movie' is underlined red but it still rendered fine in react
                             // asked in help channel, Alex says vscode might just be confused of syntax

function Movies(props) {
    return <div className="Movies">
        <h1>Movies</h1>

        <div className='Movies-grid'>
        {props.movies.map((item, index) => {
            return <Movie movie={item} key={item.name}/>
            })}
            </div>
    </div>
}

export default Movies;