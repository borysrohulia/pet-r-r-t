import { IPaginationInfo } from './pagination';

export interface ArtistState {
  artists: any[];
  loading: boolean;
  error: null | string;
  pagination: IPaginationInfo;
}

export interface IArtistImage {
  '#text': string;
  size: string;
}

export interface IArtist {
  image: IArtistImage[];
  name: string;
  url: string;
}

export interface IArtistFullResponse {
  '@attrs': IPaginationInfo;
  artist: IArtist[]
}

export enum ArtistActionType {
  FETCH_ARTIST = "FETCH_ARTIST",
  FETCH_ARTIST_SUCCESS = "FETCH_ARTIST_SUCCESS",
  FETCH_ARTIST_ERROR = "FETCH_ARTIST_ERROR",
}

interface FetchArtistAction {
  type: ArtistActionType.FETCH_ARTIST;
  payload: string;
}

interface FetchArtistActionSuccess {
  type: ArtistActionType.FETCH_ARTIST_SUCCESS;
  payload: any;
}

interface FetchArtistActionError {
  type: ArtistActionType.FETCH_ARTIST_ERROR;
  payload: string;
}

export type ArtistAction = FetchArtistAction | FetchArtistActionSuccess | FetchArtistActionError