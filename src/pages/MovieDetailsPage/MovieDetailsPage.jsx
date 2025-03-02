import { useEffect, useRef, useState } from "react"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchMovieById } from "../../services/api"
import clsx from "clsx";
import css from './MovieDetailsPage.module.css'

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const MovieDetailsPage = () => {
    const { movieId } = useParams()

    const [movie, setMovie] = useState('')

    const location = useLocation()

    const goBackUrl = useRef(location?.state ?? '/movies')

    useEffect(
        () => {
        const getData = async () => {
            const data = await fetchMovieById(movieId.toString())
            setMovie(data)
            // console.log(data, '!');
        }
        getData()
        
        }, [movieId])
    
    if (!movie) {
        return <h2>Loading...</h2>
    }
    
    return (<>
        <Link to={goBackUrl.current}>← Go back</Link><br/>
        {/* <h2>Movie № {movieId}</h2> */}
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
        <h2>{movie.original_title}</h2>
        <p>{movie.release_date}</p>
        <p>User Score: { movie.popularity }%</p>
        <p><b>Overview</b></p>
        <p>{ movie.overview }</p>
        <p><b>Genres</b></p>
        <ul>
            {movie.genres.map(item => (
                <li key={item.id}>
                    {item.name}
                </li>))}
        </ul>
        <p>Additional information</p>
        <nav className={css.nav}>
            <NavLink to='cast' className={buildLinkClass}>Cast</NavLink>
            <NavLink to='reviews' className={buildLinkClass}>Reviews</NavLink>
        </nav>
        <div>
            <Outlet/>
        </div>
    </>)
}
export default MovieDetailsPage