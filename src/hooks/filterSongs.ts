import { ISong } from '../types/song';
import { useMemo } from 'react';

export const getfilterSongs = (search: string, songs: ISong[]): ISong[] => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const filterSongs: ISong[] = useMemo<ISong[]>(() => {
    return songs.filter(item => item.artist.name.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()))
  }, [search, songs])

  return filterSongs
}