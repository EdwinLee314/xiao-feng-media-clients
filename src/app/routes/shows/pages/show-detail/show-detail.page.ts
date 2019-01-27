import { Store } from '@ngrx/store';
import { Episode } from './../../../../core/models/episode.model';
import { Component, OnInit } from '@angular/core';
import { ShowService, AudioService } from 'src/app/core/services';
import { LoadingController, NavController } from '@ionic/angular';
import * as fromStore from '../../../../store';
import { Observable } from 'rxjs';
import { Program } from 'src/app/core/models/program.model';

@Component({
    selector: 'app-show-detail',
    templateUrl: 'show-detail.page.html',
    styleUrls: ['show-detail.page.scss']
})
export class ShowDetailPage implements OnInit {
    episodes$ : Observable<Episode[]>;
    program$ : Observable<Program>;
    loading$ : Observable<boolean>;

    constructor(
        public showService: ShowService,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        private store: Store<fromStore.State>) {
        this.episodes$ = this.store.select(fromStore.getAllEpisodes);
        this.program$ = this.store.select(fromStore.getSelectedProgram);
        this.loading$ = this.store.select(fromStore.getEpisodesLoading);
    }

    ngOnInit(): void {
        //this.presentLoadingWithOptions();
        
    }

    backTo(){
        console.log("back to show");
        
        this.navCtrl.navigateBack('/tabs/shows');
    }
    async presentLoadingWithOptions() {
        const loading = await this.loadingCtrl.create({
            spinner: null,
            message: 'Please wait...',
            translucent: true,
            cssClass: 'custom-class custom-loading'
        });
        this.loading$.subscribe(
            res => {
                console.log('test', res);
                
                if(!res){
                    console.log("fire");
                    
                    loading.dismiss();
                }
            }
        )
        // this.showService.getShow('zhihuixinyu').subscribe(
        //     res => {
        //         this.episodes = this.showService.getEpisodes(res);
        //         loading.dismiss();
        //     }
        // )
        return await loading.present();
    }

}
