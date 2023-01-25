import { MovieDetail } from "../pages/movie/movie";
import { ISearch, TypeResult } from "../pages/search/search";

export interface State {
  search: {
    result: TypeResult | null,
    page: ISearch['page'],
    query: ISearch['query']
  },
  movie: {
    result: MovieDetail | null
  }
  favorites: any
}

