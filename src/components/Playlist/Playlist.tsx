import { useEffect, useState } from 'react';
import Song from '../Song/Song';
import SongTitle from '../SongTitle/SongTitle';
import styles from './Playlist.module.css'
import { getSongList } from '../../services/api';
import { ISong } from '../../domain/song';

const Playlist = () => {

  const [songList, setSongList] = useState<ISong[]>([])
  const [selectedSong, setSelectedSong] = useState<string>('')

  useEffect(() => {
    getSongList()
      .then(res => setSongList(res))
  },[])

  const handleOnClick = (id : string ) => {
    setSelectedSong(id);
  }

  const isSongSelected = (id:string) => selectedSong === id

  return (
    <section
      className={styles.playlistContainer}
      data-testid={'playlist-container'}
    >
      {songList.map(({title, author, id}:ISong) => (
        <Song  key={id} onClick={() => handleOnClick(id)}>
          <SongTitle data-testid={id} active={isSongSelected(id)}>{title}</SongTitle>
          <p>{author}</p>
        </Song>
      ))}
    </section>
  );
}

export default Playlist;