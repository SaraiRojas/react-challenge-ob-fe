import { usePlayerContext } from '../../applicationn/context/PlayerProvider';
import styles from './TitleMusicPlayer.module.css';

// Test for errors when component is outside of component
export const TitleMusicPlayer = () => {
    const { mode } = usePlayerContext();

    return (
        <div className={styles.titleContainer}>
            <p>
                <strong>{'MY PLAYLIST' + mode}</strong>
            </p>
        </div>
    );
};
