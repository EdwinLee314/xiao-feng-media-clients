import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { map, withLatestFrom, takeUntil} from 'rxjs/operators';

import * as fromStore from '../index';
import * as fromAction from '../actions/audio-player.action';
import * as fromSelector from '../selectors/index';
import { AudioService } from 'src/app/core/services';

@Injectable()
export class AudioPlayerEffects {
    constructor(
        private actions$: Actions,
        private audioService: AudioService,
        public store: Store<fromStore.State>
    ) { 
    }
    @Effect()
    addTrack$ = this.actions$.pipe(
        ofType(fromAction.ADD_TRACK),
        map((action: fromAction.AddTrack) => {
            this.audioService.addTrack(
                action.payload.url,
                this.callbackClosure(
                    function(store){
                        store.dispatch(new fromAction.AddTrackSuccess(action.payload));
                    }
                ),
                this.callbackClosure(
                    function (store) {
                        store.dispatch(new fromAction.Stop({}));
                    }
                ),
            );
            return new fromAction.OperationDone({});

        }),
    );
    
    callbackClosure(callback){
        let store = this.store;
        return function() {
            return callback(store);
        }
    }

    @Effect()
    addTrackSuccess$ = this.actions$.pipe(
        ofType(fromAction.ADD_TRACK_SUCCESS),
        map((action: fromAction.AddTrackSuccess) => {
            this.audioService.getSeek().pipe(
                takeUntil(this.actions$.pipe(ofType(fromAction.ADD_TRACK), map((data)=> {return data;})))
            ).subscribe(
                data => this.store.dispatch(new fromAction.Seek(data))
            );
            return new fromAction.OperationDone({});
        })
    );

    @Effect()
    seeked$ = this.actions$.pipe(
        ofType(fromAction.SEEKED),
        map((action: fromAction.Seeked) => {
            this.audioService.seekTo(action.payload);
            return new fromAction.OperationDone({});
        })
    );

    @Effect()
    play$ = this.actions$.pipe(
        ofType(fromAction.PLAY),
        map((action: fromAction.Play) => action.payload),
        withLatestFrom(this.store.select(fromSelector.getAudioPlaying)),
        map(([payload, playing]) => {
            this.audioService.play();
            return new fromAction.OperationDone({});
        }),
    );

    @Effect()
    pasue$ = this.actions$.pipe(
        ofType(fromAction.PASUE),
        map((action: fromAction.Pasue) => {
            this.audioService.pause();
            return new fromAction.OperationDone({});
        }),
    );

    @Effect()
    stop$ = this.actions$.pipe(
        ofType(fromAction.STOP),
        map((action: fromAction.Stop) => {
            this.audioService.stop();
            return new fromAction.OperationDone({});
        }),
    );

    @Effect()
    rate$ = this.actions$.pipe(
        ofType(fromAction.CHANGE_RATE),
        map((action: fromAction.Stop) => {
            this.audioService.changeRate(action.payload);
            return new fromAction.OperationDone({});
        }),
    );

    @Effect()
    volume$ = this.actions$.pipe(
        ofType(fromAction.CHANGE_VOLUME),
        map((action: fromAction.Stop) => {
            this.audioService.changeVolume(action.payload);
            return new fromAction.OperationDone({});
        }),
    );

    @Effect()
    reset$ = this.actions$.pipe(
        ofType(fromAction.RESET),
        map((action: fromAction.Stop) => {
            this.audioService.changeRate(action.payload);
            return new fromAction.OperationDone({});
        }),
    );
}
