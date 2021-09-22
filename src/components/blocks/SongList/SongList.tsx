import React from 'react';
import { ISong } from '../../../types/song';
import { SongItem } from '../SongItem/SongItem';
import cl from './SongList.module.css';

interface SongsListProp {
  songs: ISong[]
}

export const SongList: React.FC<SongsListProp> = ({songs}) => {
  return (
    <div className={cl.songList}>
      {
        songs.map((song, index) => {
          return <SongItem song={song} key={index} />
        })
      }
    </div>
  );
}
