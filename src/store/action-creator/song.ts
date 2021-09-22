import {SongActionType, SongAction} from '../../types/song';
import {Dispatch} from 'redux';
import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_URL
const api_key = process.env.REACT_APP_API_KEY

export const fetchSongs = () => {
  return async (dispatch: Dispatch<SongAction>) => {
    try {
      dispatch({type: SongActionType.FETCH_SONGS});
      const response = await axios.get(`${base_url}?method=tag.gettoptracks&tag=disco&api_key=${api_key}&format=json`)
      dispatch({type: SongActionType.FETCH_SONGS_SUCCESS, payload: response.data.tracks.track})
    } catch (e) {
      dispatch({type: SongActionType.FETCH_SONGS_ERROR, payload: 'Error with artist'});
    }
  }
}