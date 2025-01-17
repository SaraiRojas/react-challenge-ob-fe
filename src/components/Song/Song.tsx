import styles from './Song.module.css'

interface ISongContainer {
  children: React.ReactNode
  key: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Song = ({key, children, onClick}:ISongContainer) => {

  return(
    <div data-testid={key} className={styles.songContainer} onClick={onClick}>{children}</div>
  )
}

export default Song;