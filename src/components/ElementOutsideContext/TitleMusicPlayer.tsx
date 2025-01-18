import { usePlayerContext } from "../../applicationn/context/PlayerProvider"

export const TitleMusicPlayer = () => {

  // Test for errors when component is outside of component
  const { mode } = usePlayerContext()

  return (
    <p><strong>{'MY PLAYLIST' + mode}</strong></p>
  )
}