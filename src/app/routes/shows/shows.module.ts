import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowsPage } from './shows.page';
import { MatButtonModule, MatIconModule, MatCardModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShowDetailPage } from './pages/show-detail/show-detail.page';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { ProgramInfoComponent } from './components/program-info/program-info.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ShowsPage },
      {
        path:'details', component: ShowDetailPage
      }
  ]),
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule
  ],
  declarations: [
    ShowsPage,
    ShowDetailPage,
    EpisodeListComponent,
    ProgramInfoComponent
  ]
})
export class ShowsPageModule {}
