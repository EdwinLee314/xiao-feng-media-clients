
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Episode } from './../../core/models/episode.model';
import * as fromEpisode from '../actions/episode.action';

export interface State extends EntityState<Episode> {
    selectedEpisodeId: string;
    loading: boolean;
}

export const adapter: EntityAdapter<Episode> = createEntityAdapter<Episode>({
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedEpisodeId: null,
    loading: false
});

export function reducer(
    state = initialState,
    action: fromEpisode.EpisodeAction
): State {
    switch (action.type) {
        case fromEpisode.LOAD_EPISODES:{
            return {
                ...state,
                loading: true,
            }
        }

        case fromEpisode.LOAD_EPISODES_SUCCESS: {
            return adapter.addAll(action.payload, {
                ...state,
                loading: false,
            });
        }

        case fromEpisode.SELECT_EPISODE_SUCCESS: {
            return {
                ...state,
                selectedEpisodeId: action.payload,
            }
        }

        default: {
            return state;
        }
    }
}

export const {
    selectIds: getEpisodeIds,
    selectEntities: getEpisodeEntities,
    selectAll: getAllEpisodes,
    selectTotal: getEpisodesTotal
} = adapter.getSelectors();
