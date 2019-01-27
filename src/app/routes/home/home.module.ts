import { AudioPlayerModule } from './../../shared/audio-player/audio-player.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    AudioPlayerModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
