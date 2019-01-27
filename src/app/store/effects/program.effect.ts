import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { map,flatMap, withLatestFrom, takeUntil } from 'rxjs/operators';

import * as fromStore from '../index';
import * as fromAction from '../actions/index';
import * as fromSelector from '../selectors/index';
import { ProgramService } from 'src/app/core/services';

@Injectable()
export class ProgramEffects {
    constructor(
        private actions$: Actions,
        private programService: ProgramService,
        public store: Store<fromStore.State>
    ) {
    }
    @Effect()
    loadPrograms$ = this.actions$.pipe(
        ofType(fromAction.LOAD_PROGRAMS),
        map((action: fromAction.AddTrack) => {
            let programs =  this.programService.getPrograms();
            return new fromAction.LoadProgramsSuccess(programs);
        }),
    );

    @Effect()
    selectProgram$ = this.actions$.pipe(
        ofType(fromAction.SELECT_PROGRAM),
        flatMap((action: fromAction.SelectProgram) => {
            return [
                new fromAction.SelectProgramSuccess(action.payload.id),
                new fromAction.LoadEpisodes(action.payload.shortcut)
            ];
        })
    )
}
