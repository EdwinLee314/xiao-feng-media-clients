import { Action } from '@ngrx/store';

export type EpisodeAction =
    | LoadEpisodes
    | LoadEpisodesSuccess
    | SelectEpisode
    | SelectEpisodeSuccess;

export const LOAD_EPISODES = '[Episode] Load Episodes';
export const LOAD_EPISODES_SUCCESS = '[Episode] Load Episodes Success';

export const SELECT_EPISODE = '[Episode] Select Episode';
export const SELECT_EPISODE_SUCCESS = '[Episode] Select Episode Success';

export class LoadEpisodes implements Action {
    readonly type = LOAD_EPISODES;
    constructor(public payload: any) { }
}

export class LoadEpisodesSuccess implements Action {
    readonly type = LOAD_EPISODES_SUCCESS;
    constructor(public payload: any) { }
}
export class SelectEpisode implements Action {
    readonly type = SELECT_EPISODE;
    constructor(public payload: any) { }
}
export class SelectEpisodeSuccess implements Action {
    readonly type = SELECT_EPISODE_SUCCESS;
    constructor(public payload: any) { }
}

