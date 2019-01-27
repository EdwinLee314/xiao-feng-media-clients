import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesPage } from './routes.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: RoutesPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: './home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'shows',
                children: [
                    {
                        path: '',
                        loadChildren: './shows/shows.module#ShowsPageModule'
                    }
                ]
            },
            {
                path: 'offering',
                children: [
                    {
                        path: '',
                        loadChildren: './offering/offering.module#OfferingPageModule'
                    }
                ]
            },
            // {
            //     path: 'contact',
            //     children: [
            //         {
            //             path: '',
            //             loadChildren: './contact/contact.module#ContactPageModule'
            //         }
            //     ]
            // },
            {
                path: '',
                redirectTo: '/tabs/shows',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/shows',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutesRoutingModule { }
