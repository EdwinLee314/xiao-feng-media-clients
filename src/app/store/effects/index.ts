import { EpisodeEffects } from './episode.effect';
import { RouterEffects } from './router.effect';
import { AudioPlayerEffects } from './audio-player.effect';
import { ProgramEffects } from './program.effect';

export const effects: any[] = [
    RouterEffects, 
    AudioPlayerEffects,
    ProgramEffects,
    EpisodeEffects
];

export * from './router.effect';
export * from './audio-player.effect';
export * from './program.effect';
export * from './episode.effect';