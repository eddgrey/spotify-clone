import Song from './Song'

const Favourite = ({ favouriteSongs, setCurrentSong, setFavouriteSongs }) => {
    return (
        <main className="md:pl-60 md:pt-0 pt-28 min-h-screen w-full pb-24 bg-blueGray-800">
            <div className="w-full h-32 md:h-40 bg-gradient-to-b from-blueGray-500 via-blueGray-700 to-blueGray-800 pl-4 md:mb-8 mb-1">
                <h1 className="text-4xl md:text-5xl font-bold text-white pt-10 md:pt-6 md:mb-10">Favourite Songs</h1>
            </div>
            <div className="flex flex-row pl-24 md:justify-around md:pl-0">
                <p className="w-2/4 text-gray-500 text-sm text-center uppercase mr-12 md:mr-0">Title</p>
                <p className="w-1/4 text-gray-500 text-sm uppercase hidden md:block">Album</p>
                <p className="w-1/4 text-gray-500 text-sm uppercase">Artist</p>
            </div>
            {favouriteSongs.length > 0 ? favouriteSongs.map((song) => (
                <Song key={song.id} song={song} favouriteSongs={favouriteSongs} setCurrentSong={setCurrentSong} setFavouriteSongs ={setFavouriteSongs}/>
            )) : null}
        </main>
    )
}

export default Favourite
