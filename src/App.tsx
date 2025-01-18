import './App.module.css'
import { PlayerProvider } from './applicationn/context/PlayerProvider'
import { ErrorBoundary } from './applicationn/errorHandling/ErrorBoundary'
import { TitleMusicPlayer } from './components/ElementOutsideContext/TitleMusicPlayer'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'


function App() {

  return (
    <>
      <ErrorBoundary fallBackComponent={<>{'Someting went wrong.'}</>}>
      <TitleMusicPlayer/>
      </ErrorBoundary>
      <PlayerProvider>
        <main>
          <MusicPlayer/>
        </main>
      </PlayerProvider>
    </>
  )
}

export default App
