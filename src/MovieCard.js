import { Button } from '@material-ui/core'
import axios from 'axios'
import React,{ useState } from 'react'
import './MovieCard.css'


function MovieCard({ data }) {

    const [recommendation, setRecommendation] = useState([])

    const getRecommendations = () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${data.id}/recommendations?api_key=6901dc909e96fd4fab1d8a0d8388333b&language=en-US&page=1`)
        .then(res => setRecommendation(res.data.results))
        .catch(err => alert(err.message))
    }

    return (
        <div>
            <div className="movieContent">
            <div className="img_title">
                {data.poster_path?<img className="img" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />:null}
            </div>
            {
                data.title ?
                (<div className="content">
                    <h2>NAME :- {data.title}</h2>
                    <h2>MOVIE PLOT :- {data.overview}</h2>
                    <h2>RATING :- {data.vote_average}</h2>
                    <h2>RELEASE DATE :- {data.release_date}</h2>
                    <h2>POPULARITY :- {data.popularity}</h2>
                </div>) : null
            }
            </div>
            {   
                data.title?
                <Button style={{padding:"10px",backgroundColor:'red'}} onClick={getRecommendations} variant="contained">Get Recommendations</Button>:null
            }
            {
                    recommendation.length ?
                    <h1 style={{color:'white',padding:'10px',fontSize:'40px'}}>MOVIES RECOMMENDED FOR YOU</h1>:null
                }
            <div className="reccomend">
                {
                    recommendation.map(film =>(
                        <div className="rec">
                            <img className="img" src={`https://image.tmdb.org/t/p/original${film.poster_path}`} />
                            <h1 style={{color:'white'}}>{film.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieCard
