import React,{ useState } from 'react'
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './ListComponents.css'
import axios from 'axios'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function ListsComponent() {

    const [films, setFilms] = useState([])
    const [show, setShow] = useState(true)
    const [name,setName] = useState("")

    const popularFilms = () =>{
        console.log('It Works')
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6901dc909e96fd4fab1d8a0d8388333b&language=en-US&page=1')
        .then(res => setFilms(res.data.results))
        .catch(err => alert(err.message))
        setName("POPULAR FILMS")
        setShow(!show) 
    }

    const trendingFlims = () =>{
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=6901dc909e96fd4fab1d8a0d8388333b')
        .then(res => setFilms(res.data.results))
        .catch(err => alert(err.message))
        setName("TRENDING FILMS")
        setShow(!show)
    }

    const topRatedFilms = () =>{
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=6901dc909e96fd4fab1d8a0d8388333b&language=en-US&page=1')
        .then(res => setFilms(res.data.results))
        .catch(err => alert(err.message))
        setName("TOP RATED FILMS")
        setShow(!show)
    }

    const nowPlayingFilms = () =>{
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6901dc909e96fd4fab1d8a0d8388333b&language=en-US&page=1')
        .then(res => setFilms(res.data.results))
        .catch(err => alert(err.message))
        setName("NOW PLAYING IN THEATRES")
        setShow(!show)
    }

    const upcomingFilms = () =>{
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=6901dc909e96fd4fab1d8a0d8388333b&language=en-US&page=1')
        .then(res => setFilms(res.data.results))
        .catch(err => alert(err.message))
        setName("UPCOMING FILMS")
        setShow(!show)
    }

    const setBack = () =>{
        setShow(true)
    }

    console.log(films)

    return (
        <div>
            <Link to="/">
            <IconButton>
                <HomeIcon fontSize="large" style={{color:'red'}} />
            </IconButton>
            </Link>

            <IconButton onClick={setBack} style={{float:'left'}}>
                <ArrowBackIcon fontSize="large" style={{color:'red'}} />
            </IconButton>

            <div className={show ? 'list' : 'hide'}>
                <div onClick={popularFilms}>
                <h1>GET POPULAR FILMS</h1>
                </div>
                <div onClick={trendingFlims}>
                <h1>SEE TRENDING FILMS</h1>
                </div>
                <div onClick={topRatedFilms}>
                <h1>TOP RATED FILMS</h1>
                </div>
                <div>
                <h1 onClick={nowPlayingFilms}>NOW PLAYING</h1>
                </div>
                <div onClick={upcomingFilms}>
                <h1>UPCOMING FILMS</h1>
                </div>
            </div>  
            {
                    films.length ? <h1 style={{color:'white',padding:'10px',fontSize:'40px'}}>{name}</h1> : null
            }
            <div class="movieLists">
                {
                    films.map(film =>(
                        <div className="movieRec">
                            <img className="img" src={`https://image.tmdb.org/t/p/original${film.poster_path}`} />
                            <h1 style={{color:'white'}}>{film.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListsComponent
