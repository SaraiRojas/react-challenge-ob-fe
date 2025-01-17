import styles from './SongTitle.module.css'

interface ISong {
  active: boolean
  children: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const SongTitle = ({active,children, onClick}:ISong) => {

  const titleColor = active ? styles.colorSelected : styles.colorUnselected;

  return (
    <p className={`${styles.title} ${titleColor}`} onClick={onClick}>{children}</p>
  )
}

export default SongTitle;