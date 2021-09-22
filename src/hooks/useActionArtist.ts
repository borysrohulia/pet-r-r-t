import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ArtistActionCreators from '../store/action-creator/artist';

export const useActionArtist = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ArtistActionCreators, dispatch);
}