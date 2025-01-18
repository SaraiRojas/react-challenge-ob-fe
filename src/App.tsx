import './App.module.css'
import { PlayerProvider } from './applicationn/context/PlayerProvider'
import { TitleMusicPlayer } from './components/ElementOutsideContext/TitleMusicPlayer'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'


function App() {

  return (
    <>
      <TitleMusicPlayer/>
      <PlayerProvider>
        <main>
          <MusicPlayer/>
        </main>
      </PlayerProvider>
    </>
    
  )
}

export default App
