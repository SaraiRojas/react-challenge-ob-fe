import styles from './ControlBar.module.css';
import {buttonModes, Modes} from '../../services/buttonModes'
import { usePlayerContext } from '../../applicationn/context/PlayerProvider';

const ControlBar = () => {

  const {songList, selectedSong, setSelectedSong, mode, setMode} = usePlayerContext()

  const handleModesButton = () => {
    
    const indexMode = buttonModes.indexOf(mode)
    const nextIndex = indexMode > 1 ? 0 : indexMode + 1;
   
    setMode(buttonModes[nextIndex])
  }

  const handleNextButton = () => {

    const isFunctionBlock = mode === Modes.REPLAYING_ALL && selectedSong.songIndex === 3;

    if(!selectedSong.song.title ||  mode === Modes.REPLAYING_ONE || isFunctionBlock ) return

    // Using % buttonModes.length ensures that the index resets to 0 when it surpasses the maximum index (length - 1).
    const nextSongIndex = (selectedSong.songIndex + 1) % songList.length;

    setSelectedSong({
      song: songList[nextSongIndex],
      songIndex: nextSongIndex
    })
  }

  const handlePreviousButton = () => {

    const isFunctionBlock = (mode === Modes.NOT_REPLAYING) && selectedSong.songIndex === 0;

    if(!selectedSong.song.title || mode === Modes.REPLAYING_ONE || isFunctionBlock ) return

    // Adjusting the index with -1 + arrayLength, we apply % arrayLength to ensure the result wraps around properly for any size array.
    const prevSongIndex = (selectedSong.songIndex - 1 + songList.length) % songList.length;

    setSelectedSong({
      song: songList[prevSongIndex],
      songIndex: prevSongIndex
    })
  }

  return(
    <section className={styles.controlBarContainer}>
      <button data-testid={'previous-button'} onClick={handlePreviousButton}>Previous</button>
      <button data-testid={'next-button'} onClick={handleNextButton}>Next</button>
      <button data-testid={'current-mode-button'} onClick={handleModesButton}>{mode}</button>
    </section>
  )
}

export default ControlBar;