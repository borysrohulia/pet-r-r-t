import React from 'react';
import { IArtist } from '../../../types/artist';
import cl from './ArtistItem.module.css';

interface ArtistProps {
  artist: IArtist;
}

export const ArtistItem: React.FC<ArtistProps> = ({artist}) => {
  return (
    <div className={cl.artistItem}>
      <img src={artist.image[1]['#text']} alt="Img" />
      <div className={cl.textWrapper}>
        <a className={cl.trackName} href={artist.url}>{artist.name}</a>
      </div>
    </div>
  );
}

