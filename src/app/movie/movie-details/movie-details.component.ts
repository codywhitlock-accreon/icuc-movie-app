import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieDetails } from 'src/app/api/model/movie-details';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: [
        './movie-details.component.css'
    ]
})

export class MovieDetailsComponent {
    @Input() details: MovieDetails;
    @Output() closeModal: EventEmitter<any> = new EventEmitter();

    constructor() {}
}
