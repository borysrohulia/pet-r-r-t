import React, { useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActionsSong } from '../../hooks/useActionSong';
import { Loader } from '../UI/Loader/Loader';
import { SongList } from '../blocks/SongList/SongList';
import { Input } from '../UI/Input/Input';
import { getfilterSongs } from '../../hooks/filterSongs';

const Songs: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const {songs, loading, error} = useTypeSelector(state => state.song)
  const {fetchSongs} = useActionsSong()
  const filterSongs = getfilterSongs(search, songs)

  console.log(search)

  useEffect(() => {
    fetchSongs()
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="songs">
      <Input label="Search..." value={search} onChange={e => setSearch(e.target.value)} name="search" placeholder="Enter artist or track" />
      <SongList songs={filterSongs} />
    </div>
  )
}

export default Songs