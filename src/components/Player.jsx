import {useAudio} from 'react-use';

const Player = ({currentSong}) => {
  const [audio, state, controls] = useAudio({
    src: currentSong.previewURL,
    autoPlay: true,
  });

  const buttonPlayer = "filter invert focus:outline-none"
  return (
    <section className="fixed bottom-0 left-0 w-full h-24 flex flex-row md:justify-between justify-around py-6 backdrop-filter backdrop-blur-lg bg-gray-800">
      {audio}
      <div className="flex flex-row justify-around w-1/2 md:w-1/3">
        <span className="text-gray-50"><i className="fas fa-music fa-lg" /></span>
        <div>
          <h2 className="text-gray-50 text-base md:text-xl">{currentSong.name}</h2>
          <p className="text-gray-50 text-xs md:text-lg">{currentSong.artistName}</p>
        </div>
      </div>
      <div className="flex flex-row justify-around w-2/4">
        <button onClick={() => controls.seek(state.time - 5)} className={buttonPlayer}>
          <span><i className="fas fa-fast-backward fa-lg  md:fa-2x"></i></span>
        </button>
        <button onClick={state.paused? controls.play : controls.pause} className="filter invert focus:outline-none">
        {state.paused ? 
          <i className="far fa-play-circle fa-2x md:fa-3x"/> : 
          <i className="far fa-pause-circle fa-2x md:fa-3x"/>}
        </button>
        <button onClick={() => controls.seek(state.time + 5)} className={buttonPlayer}>
          <span>
            <i className="fas fa-fast-forward fa-lg md:fa-2x"/>
          </span>
        </button>
      </div>
      <div className="w-1/3 md:flex flex-row items-center hidden">
        <span className={buttonPlayer + "mr-6"}><i className="fas fa-volume-up fa-lg mr-2" /></span>
        <input type="range" value={state.volume} onChange={(e) => controls.volume(Number(e.target.value))} min="0.0" max="1.0" step="0.05"></input>
      </div>
    </section>
  );
};

export default Player