import './App.module.css'
import { PlayerProvider } from './applicationn/context/PlayerProvider'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'


function App() {

  return (
    <PlayerProvider>
      <main>
        <MusicPlayer/>
      </main>
    </PlayerProvider>
  )
}

export default App
