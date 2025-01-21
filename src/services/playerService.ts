import { ISong } from "../domain/song";
import { Modes } from "../domain/song";
import { buttonModes, ModesValues } from "./buttonModes";

export const getNextMode = (currentMode: Modes):Modes => {
  const indexMode = buttonModes.indexOf(currentMode);
  const nextIndex = indexMode > 1 ? 0 : indexMode + 1;
  return buttonModes[nextIndex];
};

export const getNextSong = ({currentIndex, songList, mode} : {currentIndex:number, songList: ISong[], mode: Modes}) => {
  const isFunctionBlock = mode === ModesValues.NOT_REPLAYING && currentIndex === songList.length - 1;

  if (mode === ModesValues.REPLAYING_ONE || isFunctionBlock) {
    return;
  }

  const nextSongIndex = (currentIndex + 1) % songList.length;
  return { song: songList[nextSongIndex], songIndex: nextSongIndex };
};

export const getPreviousSong = ({currentIndex, songList, mode} : {currentIndex:number, songList: ISong[], mode: Modes}) => {
  const isFunctionBlock = mode === ModesValues.NOT_REPLAYING && currentIndex === 0;

  if (mode === ModesValues.REPLAYING_ONE || isFunctionBlock) {
    return;
  }

  const prevSongIndex = (currentIndex - 1 + songList.length) % songList.length;
  return { song: songList[prevSongIndex], songIndex: prevSongIndex };
};