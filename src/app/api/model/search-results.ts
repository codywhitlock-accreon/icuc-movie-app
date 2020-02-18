import { Movie } from './movie';

export class SearchResults {
    Search: Array<Movie>;
    totalResults: string;
    Response: string;
    Error: string;


    constructor() {
        this.Search = new Array<Movie>();
    }
}
