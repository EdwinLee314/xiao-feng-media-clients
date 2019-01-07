
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowsPage } from './shows.page';
import { MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ShowsPage }]),
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: [ShowsPage]
})
export class ShowsPageModule {}
