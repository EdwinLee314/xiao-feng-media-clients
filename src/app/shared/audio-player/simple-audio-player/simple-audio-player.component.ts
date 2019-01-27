import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/core/services';

@Component({
    selector: 'app-simple-audio-player',
    templateUrl: 'simple-audio-player.component.html',
    styleUrls: ['simple-audio-player.component.scss']
})
export class SimpleAudioPlayerComponent implements OnInit {

    constructor(private audioService: AudioService) {

    }

    ngOnInit(): void {
    }

}
