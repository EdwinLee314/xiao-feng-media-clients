import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoutesRoutingModule } from './routes.routing';
import { RoutesPage } from './routes.page';

import { MatButtonModule, MatSelectModule, MatFormFieldModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RoutesRoutingModule,
        MatButtonModule,
        MatCardModule
    ],
    declarations: [RoutesPage]
})
export class RoutesModule { }
