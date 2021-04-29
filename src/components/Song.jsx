import React from 'react'

const Song = ({ song, favouriteSongs, setFavouriteSongs, setCurrentSong}) => {

    const handleFavouriteSongs = () => {
        const exist = favouriteSongs.includes(song)
        if(!exist){
            setFavouriteSongs([...favouriteSongs, song])
        }
    }

    return (
        <div className="flex flex-row justify-between px-4 py-4 w-full text-gray-50 hover:bg-blueGray-900 bg-blueGray-800">
            <div className="w-1/4 md:w-1/6 text-white text-center">
                <button onClick={() => setCurrentSong(song)}>
                    <i className="far fa-play-circle fa-lg"/>
                </button>
                <button onClick={handleFavouriteSongs} className="ml-6 focus:outline-none">
                    <span><i className="fas fa-heart md:fa-lg"></i></span>
                </button>
            </div>
            <h2 className="w-1/4 ">{song.name}</h2>
            <p className="w-1/4 md:block hidden">{song.albumName}</p>
            <p className="w-1/4">{song.artistName}</p>
        </div> 
    )
}

export default Song
