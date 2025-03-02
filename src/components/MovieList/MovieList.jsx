import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
    const location = useLocation()
    
    return <div>
        <ul>
            {movies.map(item => (
                <li key={item.id}>
                    <Link to={`/movies/${item.id.toString()}`} state={location}>
                        {<img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="" />}
                        {<br/>}
                        {item.original_title}
                    </Link>
                </li>))}
        </ul>
    </div>
}
export default MovieList