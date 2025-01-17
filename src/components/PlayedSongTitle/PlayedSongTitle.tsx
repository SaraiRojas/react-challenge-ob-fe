import styles from './PlayedSongTitle.module.css'

const PlayedSongTitle = () => {
  return (
    <section className={styles.playedSongTitleContainer}>
      <p><strong>{'Song'}</strong>{' - author'}</p>
    </section>
  )
}

export default PlayedSongTitle;