/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { ISong } from "../../domain/song";
import { buttonModes } from "../../services/buttonModes";
import { getSongList } from "../../services/api";

interface IselectedSong {
  song: ISong
  songIndex: number
}

interface IPlayerContext {
  songList: ISong[]
  selectedSong : IselectedSong
  setSelectedSong: Dispatch<SetStateAction<IselectedSong>>
  mode: string
  setMode: Dispatch<SetStateAction<string>>
}

const INITIAL_STATE_PLAYED_SONG = {
  song: {
          title: '',
          author: '',
          id: ''
        },
  songIndex: 0
}

export const PlayerContext = createContext<IPlayerContext | undefined>(undefined); 

export const PlayerProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => {

  const [songList, setSongList] = useState<ISong[]>([])
  const [selectedSong, setSelectedSong] = useState<IselectedSong>(INITIAL_STATE_PLAYED_SONG)
  const [mode, setMode] = useState<string>(buttonModes[0])

  useEffect(() => {
      getSongList()
        .then(res => setSongList(res))
    },[])

  return (
    <PlayerContext.Provider value={{
      songList,
      selectedSong,
      setSelectedSong,
      mode,
      setMode
    }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayerContext = () => {
  const context = useContext(PlayerContext)

  if (!context) {
    throw new Error("usePlayerContext must be used within a PlayerProvider");
  }
  return context;
};
