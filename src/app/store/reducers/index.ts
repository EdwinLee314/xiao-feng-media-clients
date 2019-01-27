import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Params,
} from '@angular/router';
import { createFeatureSelector, ActionReducerMap, createSelector } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromAudioPlayer from './audio-player.reducer';
import * as fromProgram from './program.reducer';
import * as fromEpisode from './episode.reducer';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
    audioPlayerReducer: fromAudioPlayer.AudioPlayerState;
    programReducer: fromProgram.State;
    episodeReducer: fromEpisode.State;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer,
    audioPlayerReducer: fromAudioPlayer.reducer,
    programReducer: fromProgram.reducer,
    episodeReducer: fromEpisode.reducer
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');
export const getAudioPlayerState = createFeatureSelector<fromAudioPlayer.AudioPlayerState>('audioPlayerReducer');
export const getProgramState = createFeatureSelector<fromProgram.State>('programReducer');
export const getEpisodeState = createFeatureSelector<fromEpisode.State>('episodeReducer');

export class CustomSerializer
    implements fromRouter.RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;

        return { url, queryParams, params };
    }
}
