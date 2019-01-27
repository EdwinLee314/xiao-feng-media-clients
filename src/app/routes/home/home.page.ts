import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Program } from 'src/app/core/models/program.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  title$: Observable<string>;
  active$: Observable<boolean>;
  playing$: Observable<boolean>;
  seeking$: Observable<boolean>;
  seek$: Observable<number>;
  rate$: Observable<number>;
  volume$: Observable<number>;
  program$: Observable<Program>;

  constructor(private store: Store<fromStore.State>){
    this.title$ = this.store.select(fromStore.getAudioTrackTitle);
    this.active$ = this.store.select(fromStore.getAudioActive);
    this.playing$ = this.store.select(fromStore.getAudioPlaying);
    this.seeking$ = this.store.select(fromStore.getAudioSeeking);
    this.rate$ = this.store.select(fromStore.getAudioRate);
    this.volume$ = this.store.select(fromStore.getAudioVolume);
    this.seek$ = this.store.select(fromStore.getAudioSeek);
    this.program$ = this.store.select(fromStore.getSelectedProgram);
  }

  ngOnInit(): void{
    // this.store.dispatch(new fromStore.AddTrack({ url: 'https://mcdn.podbean.com/mf/web/hhvdsk/zhihuixinyu36.mp3?_=1', title: 'tttasd' }));
  }

}
