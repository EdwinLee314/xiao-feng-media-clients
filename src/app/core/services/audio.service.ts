import { Injectable, Injector } from '@angular/core';
import { Howl, Howler } from 'howler';
import { Store } from '@ngrx/store';
import { State }  from '../../store/reducers';
import { Observable } from 'rxjs';
declare var moment: any;
@Injectable()
export class AudioService {

    private song: Howl;

    constructor(private injector: Injector, private store: Store<State>) { }

    addTrack(url: string, mycallback, endcallback) {
        console.log("url is ", url);
        if (this.song) {
            this.reset();
        }
        this.song = new Howl({
            src: [url],
            html5: true,
            autoplay: true,
            onload:  mycallback,
            onend: endcallback,
            onplayerror: function () {
                this.song.once('unlock', function () {
                    this.song.play();
                });
            }
        });
    }

    play() {
        console.log("play");
        if(this.song.playing() === false){
            this.song.play();
        }
        // // Determine our current seek position.
        // var seek = sound.seek() || 0;
        // timer.innerHTML = self.formatTime(Math.round(seek));
        // progress.style.width = (((seek / sound.duration()) * 100) || 0) + '%';

        // // If the sound is still playing, continue stepping.
        // if (sound.playing()) {
        //     requestAnimationFrame(self.step.bind(self));
        // }
    }

    pause() {
        console.log("pause");
        if(this.song.playing()){
            this.song.pause();
        }
    }

    stop() {
        this.song.stop();
    }

    changeRate(rate: number) {
        this.song.rate(rate);
    }
    changeVolume(volume: number) {
        // console.log("change volume", volume);
        Howler.volume(volume/100);
    }

    getDuration(){
        return this.song.duration();
    }

    getSeek(){
        return new Observable(observer =>{
            setInterval(() => {
                if (this.song && typeof this.song.seek() === 'number' ){
                    observer.next(this.song.seek());
                }
            }, 1000)
        })
    }
    seekTo(seconds) {
        this.song.seek(seconds);
    }

    formatTime(time, format) {
        return moment.utc(time).format(format);
    }

    reset() {
        this.song.unload();
    }

    on(event: string, callback: Function){
        this.song.on(event, callback);
    }

    getCtx() {
        return Howler.ctx;
    }
}
