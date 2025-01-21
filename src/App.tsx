import './App.module.css';
import { PlayerProvider } from './applicationn/context/PlayerProvider';
import { ErrorBoundary } from './applicationn/errorHandling/ErrorBoundary';
import ErrorContext from './components/ElementOutsideContext/ErrorContext';
import { TitleMusicPlayer } from './components/ElementOutsideContext/TitleMusicPlayer';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {
    return (
        <main>
            <ErrorBoundary fallBackComponent={<ErrorContext />}>
                <TitleMusicPlayer />
            </ErrorBoundary>
            <PlayerProvider>
                <MusicPlayer />
            </PlayerProvider>
        </main>
    );
}

export default App;
