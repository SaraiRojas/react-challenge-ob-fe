import styles from './ControlBar.module.css'

const ControlBar = () => {
  return(
    <section className={styles.controlBarContainer}>
      <button data-testid={'previous-button'}>Previous</button>
      <button data-testid={'next-button'}>Next</button>
      <button data-testid={'current-mode-button'}>{'Replay mode'}</button>
    </section>
  )
}

export default ControlBar;