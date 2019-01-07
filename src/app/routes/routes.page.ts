import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs',
    template: `
    <ion-tabs>

        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="home">
            <ion-icon name="play-circle"></ion-icon>
            <ion-label>现在播放</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="shows">
            <ion-icon name="apps"></ion-icon>
            <ion-label>节目单</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="offering">
            <ion-icon name="heart"></ion-icon>
            <ion-label>奉献</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="contact">
            <ion-icon name="mail"></ion-icon>
            <ion-label>联系我们</ion-label>
            </ion-tab-button>
        </ion-tab-bar>

    </ion-tabs>
    `
})
export class RoutesPage { }
