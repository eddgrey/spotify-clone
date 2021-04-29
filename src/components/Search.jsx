
import { useEffect, useRef } from 'react'
import Song from './Song';

const Search = ({ songs, setSongs, favouriteSongs, setFavouriteSongs, setCurrentSong }) => {
    const queryRef = useRef(null);

    const search = async () => {
        setSongs([])
        if(!queryRef.current.value)   return null;
        const queryString = queryRef.current.value;
        let baseURL = "https://api.napster.com"
        let key = "apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm"
        let query = `query=${queryString}`
        let url = baseURL + `/v2.2/search/verbose?${key}&${query}`

        let response = await fetch(url)
        let json = await response.json()
        setSongs(json.search.data.tracks)
        queryRef.current.value = "Search"
    };
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          search()
        }
      }

    useEffect(() => {
        console.log(songs)
    }, [songs]);

    return (
        <main className="md:pl-60 pt-28 md:pt-0 min-h-screen w-screen bg-blueGray-800">
            <div className="w-full h-32 md:h-40 bg-gradient-to-b from-blueGray-500 via-blueGray-700 to-blueGray-800 pl-4 mb-12 md:mb-8">
                <div className="pt-10">
                    <button onClick={search} className="focus:outline-none relative left-12 bottom-0"><span><i className="fas fa-search fa-lg"/></span></button>
                    <input type="input" ref={queryRef} onKeyDown={handleKeyDown} defaultValue="Search" className="border-4 border-gray-900 bg-blueGray-300 focus:outline-none py-2 px-12 text-lg rounded-full" onClick={(e) => e.target.value === "Search" ? e.target.value = "" : null}/>
                </div>
            </div>

            <div className="flex flex-row pl-24 md:justify-around md:pl-0">
                <p className="w-2/4 text-gray-500 text-sm text-center uppercase mr-12 md:mr-0">Title</p>
                <p className="w-1/4 text-gray-500 text-sm uppercase ">Album</p>
                <p className="w-1/4 text-gray-500 text-sm uppercase md:block hidden">Artist</p>
            </div>

            {songs.map(song => (
               <Song key={song.id}
                    song={song}
                    setCurrentSong={setCurrentSong} 
                    favouriteSongs={favouriteSongs} 
                    setFavouriteSongs={setFavouriteSongs}
                />
            ))
            }
        </main>
    )
}

export default Search
