import React from 'react';
import { ISong } from '../../../types/song';
import cl from './SongItem.module.css';

interface Song {
  song: ISong;
}

export const SongItem: React.FC<Song> = ({song}) => {

  return (
      <div className={cl.songItem}>
        <img src={song.image[1]['#text']} alt="Img" />
        <div className={cl.textWrapper}>
          <a className={cl.artistName} href={song.artist.url}><span>Artist:</span> {song.artist.name}</a>
          <span className={cl.trackName}>Track: {song.name}</span>
        </div>
      </div>
  );
}
