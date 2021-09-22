import { ArtistAction, ArtistState, ArtistActionType } from '../../types/artist';

const initialState: ArtistState = {
  artists: [],
  loading: false,
  error: null,
  pagination: {
    page: '',
    perPage: '',
    total: '',
    totalPages: ''
  }
}

export const artistReducer = (state = initialState, action: ArtistAction): ArtistState => {
  switch (action.type) {
    case ArtistActionType.FETCH_ARTIST:
      return { artists: [], loading: true, error: null, pagination: {
        page: action.payload,
        perPage: '',
        total: '',
        totalPages: ''
      } }
    case ArtistActionType.FETCH_ARTIST_ERROR:
      return { artists: [], loading: false, error: action.payload, pagination: {
        page: '',
        perPage: '',
        total: '',
        totalPages: ''
      } }
    case ArtistActionType.FETCH_ARTIST_SUCCESS:
      return { artists: action.payload.artists, loading: false, error: null, pagination: action.payload.pagination }
    default:
      return state
  }
}