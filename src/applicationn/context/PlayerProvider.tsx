/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { ISong } from "../../domain/song";

interface IPlayerContext {
  selectedSong : ISong
  setSelectedSong: Dispatch<SetStateAction<ISong>>
}

const INITIAL_STATE_PLAYED_SONG = {
  title: '',
  author: '',
  id: ''
}

export const PlayerContext = createContext({} as IPlayerContext); 

export const PlayerProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => {

  const [selectedSong, setSelectedSong] = useState<ISong>(INITIAL_STATE_PLAYED_SONG)

  return (
    <PlayerContext.Provider value={{
      selectedSong,
      setSelectedSong
    }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayerContext = () => useContext(PlayerContext);
