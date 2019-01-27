import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import { AudioService } from 'src/app/core/services';
import { Program } from 'src/app/core/models/program.model';

@Component({
    selector: 'full-audio-player',
    templateUrl: 'full-audio-player.component.html',
    styleUrls: ['full-audio-player.component.scss']
})
export class FullAudioPlayerComponent implements OnInit, OnChanges {

    @Input() title: string;
    @Input() active: boolean;
    @Input() playing: boolean;
    @Input() seeking: boolean;
    @Input() rate: number;
    @Input() volume: number;
    @Input() seek: number;
    @Input() program: Program;
    seekTo = 0;
    seekbar: FormControl = new FormControl("seekbar",{ updateOn: 'blur' });
    volumeTo = 0;
    volumebar: FormControl = new FormControl("volumebar", { updateOn: 'blur' });

    constructor(public audioService: AudioService, private store: Store<fromStore.State>) {
        this.seekbar.setValue(this.seek);
        this.seekbar.valueChanges.subscribe(
            changes => {
                if (this.seeking) {
                    this.seekTo = changes;
                }
            }
        );
        console.log(this.seek);
        
        // this.volumebar.valueChanges.subscribe(
        //     changes => {
        //         if (this.seeking) {
        //             this.seekTo = changes;
        //         }
        //     }
        // );
    }

    ngOnInit(): void {
        console.log(this.volume);

        this.volumebar.setValue(this.volume);
    }

    ngOnChanges(): void{
        if(!this.seeking){
            this.seekbar.setValue(this.seek);
        }
        
    }

    play(){
        this.audioService.on('play', this.onPlay);
        this.store.dispatch(new fromStore.Play({}));
    }

    onPlay(){
        console.log('player is playing');
    }
    pause(){
        this.store.dispatch(new fromStore.Pasue({}));
    }

    changeRate() {
        let value = 1;
        if(this.rate == 2){
            value = 0.5;
        }else{
            value = this.rate + 0.5;
        }
        this.store.dispatch(new fromStore.ChangeRate(value));
    }

    getDuration(){
        return Number(this.audioService.getDuration());
    }

    formatTime(value: number){
        return this.audioService.formatTime(value * 1000, 'HH:mm:ss');
    }

    onSeekStart() {
        // console.log('seek start');
        this.store.dispatch(new fromStore.Seeking({}));
    }
    onSeekChange(event){
        // console.log('change', event.detail.value);
    }
    onSeekEnd(event) {
        // console.log('seek end', this.seekTo);
        this.store.dispatch(new fromStore.Seeked(this.seekTo));
        this.seekTo = 0;
    }
    onVolumeChange(event){
        console.log('change', event.detail.value);
        this.store.dispatch(new fromStore.ChangeVolume(event.detail.value));
    }

    replay(){
        let value = this.seek - 10;
        if(value <= 0){
            value = 0;
        }
        this.store.dispatch(new fromStore.Seeked(value));
    }

    forward(){
        let value = this.seek + 30;
        if(value >= this.getDuration()){
            value = this.getDuration();
        }
        this.store.dispatch(new fromStore.Seeked(value));
    }
}
