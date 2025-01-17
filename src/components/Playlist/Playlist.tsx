import { useEffect, useState } from 'react';
import Song from '../Song/Song';
import SongTitle from '../SongTitle/SongTitle';
import styles from './Playlist.module.css'
import { getSongList } from '../../services/api';
import { ISong } from '../../domain/song';

const Playlist = () => {

  const [songList, setSongList] = useState<ISong[]>([])

  useEffect(() => {
    getSongList()
      .then(res => setSongList(res))
  },[])

  return (
    <section
      className={styles.playlistContainer}
      data-testid={'playlist-container'}
    >
      {songList.map(({title, author, id}:ISong) => (
        <Song key={id}>
          <SongTitle data-testid={id} active={false}>{title}</SongTitle>
          <p>{author}</p>
        </Song>
      ))}
    </section>
  );
}

export default Playlist;