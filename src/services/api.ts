import { ISong } from "../domain/song"
import { songList } from "./songListData"

export const getSongList = (): Promise<ISong[]> => {
 return new Promise((res) => setTimeout (()=> res(songList), 450))
}