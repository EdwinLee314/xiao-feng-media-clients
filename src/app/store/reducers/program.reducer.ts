import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Program } from 'src/app/core/models/program.model';
import * as fromProgram from '../actions/program.action';

export interface State extends EntityState<Program>{
    selectedProgramId: number;
}

export const adapter: EntityAdapter<Program> = createEntityAdapter<Program>({
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedProgramId: 0,
});

export function reducer(
    state = initialState,
    action: fromProgram.ProgramAction
): State {
    switch (action.type) {
        case fromProgram.LOAD_PROGRAMS_SUCCESS: {
            return adapter.addAll(action.payload,{
                ...state,
            });
        }

        case fromProgram.SELECT_PROGRAM_SUCCESS:{
            return {
                ...state,
                selectedProgramId: action.payload,
            }
        }

        default: {
            return state;
        }
    }
}

export const {
    selectIds: getProgramIds,
    selectEntities: getProgramEntities,
    selectAll: getAllPrograms,
    selectTotal: getProgramsTotal
} = adapter.getSelectors();
