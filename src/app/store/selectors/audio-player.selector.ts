import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAudioPlayer from '../reducers/audio-player.reducer';

export const getAudioTrackTitle = createSelector(
    fromFeature.getAudioPlayerState,
    fromAudioPlayer.getTrackTitle
);
export const getAudioActive = createSelector(
    fromFeature.getAudioPlayerState,
    fromAudioPlayer.getActive
);
export const getAudioPlaying = createSelector(
    fromFeature.getAudioPlayerState,
    fromAudioPlayer.getPlaying
);
export const getAudioSeeking = createSelector(
    fromFeature.getAudioPlayerState,
    fromAudioPlayer.getSeeking
);
export const getAudioRate = createSelector(
    fromFeature.getAudioPlayerState,
    fromAudioPlayer.getRate
);
export const getAudioVolume = createSelector(
    fromFeature.getAudioPlayerState,
    fromAudioPlayer.getVolume
);
export const getAudioSeek = createSelector(
    fromFeature.getAudioPlayerState,
    fromAudioPlayer.getSeek
);