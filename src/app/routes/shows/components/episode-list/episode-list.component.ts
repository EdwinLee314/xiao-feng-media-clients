import { Store } from '@ngrx/store';
import { Episode } from './../../../../core/models/episode.model';
import { Component, OnInit, Input } from '@angular/core';
import * as fromStore from '../../../../store';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'episode-list',
    templateUrl: 'episode-list.component.html',
    styleUrls: ['episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {

    @Input() episodes: Episode[];
    constructor(
        public navCtrl: NavController,
        private store: Store<fromStore.State>
    ) {
    }

    ngOnInit(): void {
        
    }

    playingEpisode(episode: Episode) {
        this.store.dispatch(new fromStore.AddTrack({ url: episode.audio_url, title: episode.title }))
        this.navCtrl.navigateForward('/tabs/home');
    }
}
