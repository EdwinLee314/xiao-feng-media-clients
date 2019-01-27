import * as fromAudioPlayer from '../actions/audio-player.action';
export * from '../actions/audio-player.action';


export interface AudioPlayerState {
    track_url: string;
    track_title: string;
    rate: number;
    volume: number;
    seek: number;
    active: boolean;
    playing: boolean;
    seeking: boolean;
}

export const initialState: AudioPlayerState = {
    track_url: '',
    track_title: 'ttt',
    rate: 1.0,
    volume: 100,
    seek: 0,
    active: false,
    playing: false,
    seeking: false,
};

export function reducer(
    state = initialState,
    action: fromAudioPlayer.AudioPlayerAction
): AudioPlayerState {
    switch(action.type) {
        case fromAudioPlayer.CHANGE_RATE: {
            return {
                ...state,
                rate: action.payload
            }
        }

        case fromAudioPlayer.CHANGE_VOLUME: {
            return {
                ...state,
                volume: action.payload
            }
        }
        case fromAudioPlayer.ADD_TRACK: {
            return {
                ...state,
                track_url: action.payload.url,
                track_title: action.payload.title
            }
        }
        case fromAudioPlayer.ADD_TRACK_SUCCESS: {
            return {
                ...state,
                track_url: action.payload.url,
                track_title: action.payload.title,
                active: true,
                playing: true,
            }
        }

        case fromAudioPlayer.PLAY: {
            return {
                ...state,
                playing: true,
                active: true
            }
        }

        case fromAudioPlayer.PASUE: {
            return {
                ...state,
                playing: false
            }
        }

        case fromAudioPlayer.STOP: {
            return {
                ...state,
                playing: false
            }
        }
        
        case fromAudioPlayer.SEEK: {
            return  {
                ...state,
                seek: action.payload
            }
        }
        case fromAudioPlayer.SEEKING: {
            return  {
                ...state,
                seeking: true
            }
        }

        case fromAudioPlayer.SEEKED: {
            return {
                ...state,
                seek: action.payload,
                seeking: false
            }
        }
    }

    return state;
}

export const getTrackTitle = (state: AudioPlayerState) => state.track_title;
export const getActive = (state: AudioPlayerState) => state.active;
export const getPlaying = (state: AudioPlayerState) => state.playing;
export const getSeeking = (state: AudioPlayerState) => state.seeking;
export const getRate = (state: AudioPlayerState) => state.rate;
export const getVolume = (state: AudioPlayerState) => state.volume;
export const getSeek = (state: AudioPlayerState) => state.seek;