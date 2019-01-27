import { Injectable } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { map, catchError, concatMap, withLatestFrom, takeUntil } from 'rxjs/operators';

import * as fromStore from '../index';
import * as fromAction from '../actions/index';
import * as fromSelector from '../selectors/index';
import { ShowService } from 'src/app/core/services';
import { of } from 'rxjs';

@Injectable()
export class EpisodeEffects {

    
    constructor(
        private actions$: Actions,
        public loadingCtrl: LoadingController,
        private showService: ShowService,
        public store: Store<fromStore.State>
    ) {
    }
    @Effect()
    loadEpisodes$ = this.actions$.pipe(
        ofType(fromAction.LOAD_EPISODES),
        concatMap((action: fromAction.LoadEpisodes) => {
            return this.showService.getShow(action.payload).pipe(
                map(res => {
                    let episodes = this.showService.getEpisodes(res);
                    console.log("effect", episodes);
                    
                    return new fromAction.LoadEpisodesSuccess(episodes);
                }),
                catchError(error => {
                    return of(new fromAction.OperationDone(error));
                })
            );
        })
    );

    
}
