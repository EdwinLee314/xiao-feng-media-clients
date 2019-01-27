import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromPrograms from '../reducers/program.reducer';

export const getProgramEntities = createSelector(
    fromFeature.getProgramState,
    fromPrograms.getProgramEntities
);

export const getAllPrograms = createSelector(
    fromFeature.getProgramState,
    fromPrograms.getAllPrograms
);

export const getSelectedProgramId = createSelector(
    fromFeature.getProgramState,
    (state) => state.selectedProgramId
);

export const getSelectedProgram =  createSelector(
    getAllPrograms,
    getSelectedProgramId,
    (Programs, selectedId) => {
        return Programs.find(Program => Program.id === selectedId);
    }
)