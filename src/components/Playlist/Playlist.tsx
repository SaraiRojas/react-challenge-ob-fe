import { useEffect, useState } from 'react';
import Song from '../Song/Song';
import SongTitle from '../SongTitle/SongTitle';
import styles from './Playlist.module.css'
import { getSongList } from '../../services/api';
import { ISong } from '../../domain/song';
import { usePlayerContext } from '../../applicationn/context/PlayerProvider';

const Playlist = () => {

  const [songList, setSongList] = useState<ISong[]>([])
  const {selectedSong, setSelectedSong} = usePlayerContext();

  useEffect(() => {
    getSongList()
      .then(res => setSongList(res))
  },[])

  const handleOnClick = (song : ISong ) => {
    setSelectedSong(song);
  }

  const isSongSelected = (id:string) => selectedSong.id === id

  return (
    <section
      className={styles.playlistContainer}
      data-testid={'playlist-container'}
    >
      {songList.map((song:ISong) => {
        const {author, title, id} = song;
        return(
          <Song  key={id} onClick={() => handleOnClick(song)}>
          <SongTitle data-testid={id} active={isSongSelected(id)}>{title}</SongTitle>
          <p>{author}</p>
        </Song>
      )})}
    </section>
  );
}

export default Playlist;