import { Action } from '@ngrx/store';

export type ProgramAction =
    | LoadPrograms
    | LoadProgramsSuccess
    | SelectProgram
    | SelectProgramSuccess;

export const LOAD_PROGRAMS = '[Program] Load Programs';
export const LOAD_PROGRAMS_SUCCESS = '[Program] Load Programs Success';

export const SELECT_PROGRAM = '[Program] Select Program';
export const SELECT_PROGRAM_SUCCESS = '[Program] Select Program Success';

export class LoadPrograms implements Action {
    readonly type = LOAD_PROGRAMS;
    constructor(public payload: any) { }
}

export class LoadProgramsSuccess implements Action {
    readonly type = LOAD_PROGRAMS_SUCCESS;
    constructor(public payload: any) { }
}
export class SelectProgram implements Action {
    readonly type = SELECT_PROGRAM;
    constructor(public payload: any) { }
}
export class SelectProgramSuccess implements Action {
    readonly type = SELECT_PROGRAM_SUCCESS;
    constructor(public payload: any) { }
}

