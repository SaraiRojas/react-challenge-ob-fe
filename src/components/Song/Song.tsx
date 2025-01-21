import styles from './Song.module.css';

interface ISongContainer {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Song = ({ children, onClick }: ISongContainer) => {
    return (
        <div className={styles.songContainer} onClick={onClick}>
            {children}
        </div>
    );
};

export default Song;
