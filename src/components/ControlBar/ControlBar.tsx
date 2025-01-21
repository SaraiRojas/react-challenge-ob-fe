import styles from './ControlBar.module.css';
import { Modes } from '../../domain/song';
import { usePlayerContext } from '../../applicationn/context/PlayerProvider';
import { getNextMode, getNextSong, getPreviousSong } from '../../services/playerService';

const ControlBar = () => {
    const { songList, selectedSong, setSelectedSong, mode, setMode } = usePlayerContext();

    const handleModesButton = () => {
        const nextMode: Modes = getNextMode(mode);

        setMode(nextMode);
    };

    const handleNextButton = () => {
        if (!selectedSong.song.title) return;
        const currentIndex: number = selectedSong.songIndex;
        const nextSong = getNextSong({ currentIndex, songList, mode });

        if (nextSong) {
            setSelectedSong(nextSong);
        }
    };

    const handlePreviousButton = () => {
        if (!selectedSong.song.title) return;
        const currentIndex: number = selectedSong.songIndex;
        const previousSong = getPreviousSong({ currentIndex, songList, mode });

        if (previousSong) {
            setSelectedSong(previousSong);
        }
    };

    return (
        <section className={styles.controlBarContainer}>
            <button data-testid={'previous-button'} onClick={handlePreviousButton}>
                Previous
            </button>
            <button data-testid={'next-button'} onClick={handleNextButton}>
                Next
            </button>
            <button data-testid={'current-mode-button'} onClick={handleModesButton}>
                {mode}
            </button>
        </section>
    );
};

export default ControlBar;
