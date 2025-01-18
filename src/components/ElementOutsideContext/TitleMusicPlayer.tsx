import { usePlayerContext } from "../../applicationn/context/PlayerProvider"

export const TitleMusicPlayer = () => {

  const { mode } = usePlayerContext()

  console.log(mode)

  return (
    <p><strong>{'MY PLAYLIST'}</strong></p>
  )
}