import {SongState, SongActionType, SongAction} from '../../types/song';

const initialState: SongState = {
  songs: [],
  loading: false,
  error: null
};

export const songReducer = (state = initialState, action: SongAction): SongState => {
  switch (action.type) {
    case SongActionType.FETCH_SONGS:
      return {songs: [], loading: true, error: null};
    case SongActionType.FETCH_SONGS_SUCCESS:
      return {songs: action.payload, loading: false, error: null};
    case SongActionType.FETCH_SONGS_ERROR:
      return {songs: [], loading: false, error: action.payload}
    default: return state
  }
}