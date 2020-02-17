import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: [
        './modal.component.css'
    ]
})

export class ModalComponent {
    @Input() errorCode?: string;
    @Output() closeModal: EventEmitter<any> = new EventEmitter();
}
