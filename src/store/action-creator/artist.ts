import {ArtistActionType, ArtistAction} from '../../types/artist';
import {Dispatch} from 'redux';
import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_URL
const api_key = process.env.REACT_APP_API_KEY

export const fetchArtist = (payload: string) => {
  return async (dispatch: Dispatch<ArtistAction>) => {
    try {
      dispatch({type: ArtistActionType.FETCH_ARTIST, payload: payload});
      const response = await axios.get(`${base_url}?method=tag.gettopartists&tag=disco&api_key=${api_key}&format=json&limit=10&page=${payload}`)
      dispatch({type: ArtistActionType.FETCH_ARTIST_SUCCESS, payload: {
        pagination: {
          page: response.data.topartists['@attr'].page,
          perPage: response.data.topartists['@attr'].perPage,
          total: response.data.topartists['@attr'].total,
          totalPages: response.data.topartists['@attr'].totalPages,
        },
        artists: response.data.topartists.artist,
      }});
    } catch (e) {
      console.warn('eerrrooorr: ', e);
      dispatch({type: ArtistActionType.FETCH_ARTIST_ERROR, payload: 'Error with artist'});
    }
  }
}