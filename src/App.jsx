
import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Home from './components/Home';
import Nav from './components/Nav';
import Favourite from './components/Favourite';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Player from './components/Player';

const initialState = JSON.parse(localStorage.getItem('favorites') || '[]');

const App = () => {
    
    const [favouriteSongs, setFavouriteSongs] = useState(initialState);
    const [songs, setSongs] = useState([])
    const [currentSong, setCurrentSong] = useState({name: "", artistName: "", previewURL: ""})


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favouriteSongs));
	}, [ favouriteSongs ]);

    return (
        <main className="flex flex-row bg-grayBlue-800">
            <Router>
                <Nav/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/search">
                        <Search songs={songs} setSongs={setSongs} favouriteSongs={favouriteSongs} setFavouriteSongs={setFavouriteSongs} setCurrentSong={setCurrentSong}/> 
                    </Route>
                    <Route path="/favourite">
                        <Favourite favouriteSongs={favouriteSongs} setCurrentSong={setCurrentSong} />
                    </Route>
                </Switch>
                <Player currentSong={currentSong}/>
            </Router>
        </main>
    )
}

export default App
