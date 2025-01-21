import Song from '../Song/Song';
import SongTitle from '../SongTitle/SongTitle';
import styles from './Playlist.module.css';
import { ISong } from '../../domain/song';
import { usePlayerContext } from '../../applicationn/context/PlayerProvider';
import { useEffect } from 'react';
import { getSongList } from '../../services/api';

const Playlist = () => {
    const { songList, setSongList, selectedSong, setSelectedSong } = usePlayerContext();

    useEffect(() => {
        getSongList().then((res) => setSongList(res));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnClick = (song: ISong, songIndex: number) => {
        setSelectedSong({ song, songIndex });
    };

    const isSongSelected = (id: string) => selectedSong.song.id === id;

    return (
        <section className={styles.playlistContainer} data-testid={'playlist-container'}>
            {songList.map((song: ISong, index: number) => {
                const { author, title, id } = song;
                return (
                    <Song key={id} onClick={() => handleOnClick(song, index)}>
                        <SongTitle data-testid={id} active={isSongSelected(id)}>
                            {title}
                        </SongTitle>
                        <p>{author}</p>
                    </Song>
                );
            })}
        </section>
    );
};

export default Playlist;
