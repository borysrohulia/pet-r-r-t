import React, { useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActionArtist } from '../../hooks/useActionArtist';
import { Loader } from '../UI/Loader/Loader';
import { ArtistItem } from '../blocks/ArtistItem/ArtistItem';
import CSS from 'csstype';
import { Pagination } from '../UI/Pagination/Pagination';

interface IPage {
  page: string;
}

const Artists: React.FC = () => {
  const {artists, loading, error, pagination} = useTypeSelector(state => state.artist)
  const {fetchArtist} = useActionArtist()
  
  // const page: string = '1'

  const [page, setPage] = useState<IPage>({page: '1'})

  const updateP = (p: string) => {
    setPage({ page: p })
  }

  
  useEffect(() => {
    fetchArtist(page.page)
  }, [page])

  console.log(pagination)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h1>{error}</h1>
  }

  const style: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div style={style}>
      {
        artists.map((artist, index) => 
          <ArtistItem artist={artist} key={index} />
        )
      }
      <Pagination pagination={pagination} updatePage={updateP} />
    </div>
  );
}

export default Artists