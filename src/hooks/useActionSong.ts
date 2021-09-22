import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SongActionCreators from '../store/action-creator/song';

export const useActionsSong = () => { 
  const dispatch = useDispatch();
  return bindActionCreators(SongActionCreators, dispatch)
};