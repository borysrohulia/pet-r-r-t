import React, { useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActionsSong } from '../../hooks/useActionSong';
import { Loader } from '../UI/Loader/Loader';
import { SongList } from '../blocks/SongList/SongList';

const Songs: React.FC = () => {
  const {songs, loading, error} = useTypeSelector(state => state.song)
  const {fetchSongs} = useActionsSong()

  useEffect(() => {
    fetchSongs()
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h1>{error}</h1>
  }

  console.log(songs)

  return (
    <div className="songs">
      <SongList songs={songs} />
    </div>
  )
}

export default Songs