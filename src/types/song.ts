export interface SongState {
  songs: any[];
  loading: boolean;
  error: null | string;
};

export interface IArtistSong {
  name: string;
  url: string;
}

export interface IImageSong {
  size: string;
  '#text': string;
}

export interface ISong {
  duration: string;
  artist: IArtistSong;
  image: IImageSong[];
  name: string;
  url: string;
}

export enum SongActionType {
  FETCH_SONGS = "FETCH_SONGS",
  FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS",
  FETCH_SONGS_ERROR = "FETCH_SONGS_ERROR",
}

interface FetchSongsAction {
  type: SongActionType.FETCH_SONGS;
}

interface FetchSongsActionSuccess {
  type: SongActionType.FETCH_SONGS_SUCCESS;
  payload: ISong[];
}

interface FetchSongsActionError {
  type: SongActionType.FETCH_SONGS_ERROR;
  payload: string;
}

export type SongAction = FetchSongsAction | FetchSongsActionSuccess | FetchSongsActionError