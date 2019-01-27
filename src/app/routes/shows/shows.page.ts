import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { ProgramService } from 'src/app/core/services';


@Component({
  selector: 'app-shows',
  templateUrl: 'shows.page.html',
  styleUrls: ['shows.page.scss']
})
export class ShowsPage implements OnInit{

  programs = [];
  episodes = [];
  constructor(
    private programService: ProgramService, 
    public navCtrl: NavController,
    private store: Store<fromStore.State>
  ){
    this.programs = this.programService.getPrograms();
    this.store.dispatch(new fromStore.LoadPrograms({}));
  }
  
  ngOnInit(): void {
  }

  public showDetails(myId: number, myShortcut: string){
    this.store.dispatch(new fromStore.SelectProgram({id: myId, shortcut: myShortcut}));
    this.navCtrl.navigateForward('/tabs/shows/details');
  }
}
