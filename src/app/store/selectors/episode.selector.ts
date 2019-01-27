import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromEpisodes from '../reducers/episode.reducer';

export const getEpisodeEntities = createSelector(
    fromFeature.getEpisodeState,
    fromEpisodes.getEpisodeEntities
);

export const getAllEpisodes = createSelector(
    fromFeature.getEpisodeState,
    fromEpisodes.getAllEpisodes
);

export const getSelectedEpisodeId = createSelector(
    fromFeature.getEpisodeState,
    (state) => state.selectedEpisodeId
);

export const getEpisodesLoading = createSelector(
    fromFeature.getEpisodeState,
    (state) => state.loading
);

export const getSelectedEpisode = (EpisodeId) => createSelector(
    getAllEpisodes,
    Episodes => {
        return Episodes.find(episode => episode.id === EpisodeId);
    }
)