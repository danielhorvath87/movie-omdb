export enum Movie {
  POSTER = 'Poster',
  TITLE = 'Title',
  TYPE = 'Type',
  YEAR = 'Year',
  IMDBID = 'imdbID',
}

export interface ISearch {
  result: TypeResult | null;
  page: number;
  query: string;
}

export type TypeResult = {
  Search: TypeSearchMovie[];
  totalResults: number;
  Response: 'True' | 'False';
};

export type TypeSearchMovie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

