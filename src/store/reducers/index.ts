import {combineReducers} from 'redux';
import {songReducer} from './songReducer';
import {artistReducer} from './artistReducer';

export const rootReducer = combineReducers({
  song: songReducer,
  artist: artistReducer,
})

export type RootState = ReturnType<typeof rootReducer>