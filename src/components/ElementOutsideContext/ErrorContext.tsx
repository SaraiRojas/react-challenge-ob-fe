import styles from './ErrorContext.module.css';

const ErrorContext = () => {
  return (
    <div className={styles.ErrorContextContainer}>
      <p><strong>Something went wrong.</strong></p>
    </div>
  )
}

export default ErrorContext;