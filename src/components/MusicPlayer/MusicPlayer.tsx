import ControlBar from "../ControlBar/ControlBar";
import PlayedSongTitle from "../PlayedSongTitle/PlayedSongTitle";
import Playlist from "../Playlist/Playlist";
import styles from './MusicPlayer.module.css'

const MusicPlayer = () => {

  return(
    <div className={styles.musicPlayerContainer}>
      <Playlist></Playlist>
      <PlayedSongTitle></PlayedSongTitle>
      <ControlBar></ControlBar>
    </div>
  )
}

export default MusicPlayer;