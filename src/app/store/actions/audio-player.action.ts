import { Action } from '@ngrx/store';

export type AudioPlayerAction = 
    | Play
    | Pasue 
    | Stop
    | Loading
    | Loaded
    | Seek
    | Seeking
    | Seeked
    | ChangeRate
    | ChangeVolume
    | AddTrack
    | AddTrackSuccess
    | OperationDone
    | Reset;

export const LOADING = '[Audio Player] Loading';
export const LOADED = '[Audio Player] Loaded';

export const PLAY = '[Audio Player] Play';
export const PASUE = '[Audio Player] Pasue';
export const STOP = '[Audio Player] Stop';

export const SEEK = '[Audio Player] Seek';
export const SEEKING = '[Audio Player] Seeking';
export const SEEKED = '[Audio Player] Seeked';

export const CHANGE_RATE = '[Audio Player] Change Rate';
export const CHANGE_VOLUME = '[Audio Player] Change Volume';

export const ADD_TRACK = '[Audio Player] Add track';
export const ADD_TRACK_SUCCESS = '[Audio Player] Add track success';
export const OPERATION_DONE = '[Audio Player] Operation Done';

export const RESET = '[Audio Player] Reset'
// export const DELETE_TRACK = '[Audio Player] Delete track';

// export const LOAD_AudioPlayer = '[Audio Player] Load AudioPlayer';
// export const CLEAR_AudioPlayer = '[Audio Player] Clear AudioPlayer';

export class Play implements Action {
    readonly type = PLAY;
    constructor(public payload: any) { }
}

export class Pasue implements Action {
    readonly type = PASUE;
    constructor(public payload: any) { }
}
export class Stop implements Action {
    readonly type = STOP;
    constructor(public payload: any) { }
}
export class Loading implements Action {
    readonly type = LOADING;
    constructor(public payload: any) { }
}
export class Loaded implements Action {
    readonly type = LOADED;
    constructor(public payload: any) { }
}
export class Seek implements Action {
    readonly type = SEEK;
    constructor(public payload: any) { }
}
export class Seeking implements Action {
    readonly type = SEEKING;
    constructor(public payload: any) { }
}
export class Seeked implements Action {
    readonly type = SEEKED;
    constructor(public payload: any) { }
}
export class ChangeRate implements Action {
    readonly type = CHANGE_RATE;
    constructor(public payload: number) { }
}
export class ChangeVolume implements Action {
    readonly type = CHANGE_VOLUME;
    constructor(public payload: any) { }
}
export class AddTrack implements Action {
    readonly type = ADD_TRACK;
    constructor(public payload: any) { }
}
export class AddTrackSuccess implements Action {
    readonly type = ADD_TRACK_SUCCESS;
    constructor(public payload: any) { }
}
export class OperationDone implements Action {
    readonly type = OPERATION_DONE;
    constructor(public payload: any) { }
}
export class Reset implements Action {
    readonly type = RESET;
    constructor(public payload: any) { }
}
