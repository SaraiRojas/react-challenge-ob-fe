import { usePlayerContext } from '../../applicationn/context/PlayerProvider';
import styles from './PlayedSongTitle.module.css'

const PlayedSongTitle = () => {
  const {selectedSong} = usePlayerContext();

  const {title, author} = selectedSong;

  return (
    <section className={styles.playedSongTitleContainer}>
      <p><strong>{title}</strong> - {author}</p>
    </section>
  )
}

export default PlayedSongTitle;