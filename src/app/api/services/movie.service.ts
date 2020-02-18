import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MovieService {

    private API_KEY = '2b04e489';

    constructor(private http: HttpClient) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    getMoviesByTitle(id: string): Promise<any> {
        const url = `${'http://www.omdbapi.com/?apikey='}${this.API_KEY}${'&s='}${id}`;
        return this.http
            .get<any>(url)
            .toPromise()
            .catch(this.handleError);
    }

    getMoviesByID(id: string, plot: string): Promise<any> {
        const url = `${'http://www.omdbapi.com/?apikey='}${this.API_KEY}${'&i='}${id}${'&plot='}${plot}`;
        return this.http
            .get<any>(url)
            .toPromise()
            .catch(this.handleError);
    }
}
