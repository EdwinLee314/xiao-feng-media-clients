import { ShowService } from './show.service';
import { ProgramService } from './program.service';
import { AudioService } from './audio.service';

export const services: any[] = [
    ShowService,
    ProgramService,
    AudioService,

];

export * from './show.service';
export * from './program.service';
export * from './audio.service';