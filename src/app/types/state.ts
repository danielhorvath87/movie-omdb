import { MovieDetail } from "../pages/movie/movie";
import { ISearch, TypeResult } from "../pages/search/search";

export interface State {
  search: {
    result: TypeResult | null,
    page: ISearch['page'],
    query: ISearch['query'],
    loading: boolean
  },
  movie: {
    result: MovieDetail | null
  }
  favorites: any
}

