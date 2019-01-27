import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { Program } from 'src/app/core/models/program.model';

@Component({
    selector: 'program-info',
    templateUrl: 'program-info.component.html',
    styleUrls: ['program-info.component.scss']
})
export class ProgramInfoComponent implements OnInit {

    @Input() program: Program;
    constructor(
    ) {
    }

    ngOnInit(): void {

    }

}
