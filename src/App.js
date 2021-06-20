import React,{ useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './MovieCard'
import { Button,Input,IconButton  } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ListsComponent from './ListsComponent'

function App() {

  const [movie,setMovie] = useState("")
  const [data,setData] = useState({})


  const getMovieData = (film) =>{
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${film}&api_key=6901dc909e96fd4fab1d8a0d8388333b`)
    .then(res => setData(res.data.results[0]))
    .catch(err => alert(err.message))
  }

  const handleButton = async (event) =>{
    event.preventDefault()
    getMovieData(movie)
    setMovie('')
  }

  console.log(data)

  return (
    <div className="App">

      <Router>

        <Switch>

            <Route path="/list">
              <ListsComponent />
            </Route>

            <Route path="/">
              <Link to="/list">
              <IconButton style={{float:'left'}}>
                <MenuIcon fontSize="large" style={{color:'red',float:'left'}}/>
              </IconButton>
              </Link>
        
              <div className="cardEle">
               <h1>MOVIE RECOMMENDATION SYSTEM</h1>
                <input placeholder='Movie Here' value={movie} onChange={event => setMovie(event.target.value)} /><br />
          
                <Button style={{width:'150px' ,color:'black', backgroundColor:'red' }} onClick={handleButton} variant="contained">Search</Button>
                <MovieCard data={data} />
              </div>

            </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
