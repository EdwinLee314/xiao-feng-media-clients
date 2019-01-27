import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatSliderModule } from '@angular/material';
import { SimpleAudioPlayerComponent } from './simple-audio-player/simple-audio-player.component';
import { FullAudioPlayerComponent } from './full-audio-player/full-audio-player.component';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatSliderModule
    ],
    declarations: [
        SimpleAudioPlayerComponent,
        FullAudioPlayerComponent
    ],
    exports: [
        SimpleAudioPlayerComponent,
        FullAudioPlayerComponent
    ]
})
export class AudioPlayerModule { }
