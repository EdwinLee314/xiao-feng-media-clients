
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { Episode } from '../models/episode.model';

declare var require: any;

@Injectable()
export class ShowService {

    private feedUrl: string = 'category/zhihuixinyu/feed/';

    constructor(private http: HttpClient) { }

    public getShow(): Observable<any> {
        return this.http
            .get(this.feedUrl, { responseType: 'text' })
            .pipe(
                catchError((error: any) => this.handleError(error))
            );
    }
    private handleError(error: HttpErrorResponse) {
        error = error.error;
        const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

    public getEpisodes(xmlStr: string): Episode[] {
        let episodes = [];
        let domparser = new DOMParser();
        let domdoc = domparser.parseFromString(xmlStr, 'application/xml');
        let itemList = Array.from(domdoc.querySelectorAll("item"));
        for (let element of itemList) {
            console.log(element);
            let episode: Episode = {
                title: '',
                pubdate: '',
                content: '',
                audio_cover_style: '',
                audio_url: '',
                creator: '',
                category: ''
            };
            episode.title = element.getElementsByTagName('title')[0].textContent;
            episode.pubdate = element.getElementsByTagName('pubDate')[0].textContent;
            episode.creator = element.getElementsByTagName('dc:creator')[0].textContent;
            episode.category = element.getElementsByTagName('category')[0].textContent;
            let eleContent = element.getElementsByTagName('content:encoded')[0].textContent;
            episode = this.parseContent(eleContent, episode);
            // console.log(episode);

            episodes.push(episode);
        }
        return episodes;
    }

    private parseContent(htmlStr: string, episode: Episode): Episode {
        var htmlparser = require("htmlparser2");
        let isDescription = false;
        let description = '';
        var parser = new htmlparser.Parser({
            onopentag: function (name, attribs) {
                if (attribs.class === "et_pb_audio_cover_art") {
                    // console.log(attribs);
                    episode.audio_cover_style = attribs.style;
                }
                if (name === "source" && attribs.type === "audio/mpeg") {
                    // console.log("url is", attribs.src);
                    episode.audio_url = attribs.src;
                }
                if (name === "div" && attribs.class === 'et_pb_text_inner') {
                    isDescription = true;
                }
            },
            ontext: function (text) {
                if (isDescription) {
                    description = description + text;
                }
            },
            onclosetag: function (tagname) {
                if (isDescription && tagname === 'div') {
                    isDescription = false;
                    // console.log("description", description);
                    episode.content = description;
                }
            }
        }, { decodeEntities: true });
        parser.write(htmlStr);
        parser.end();
        return episode;
    }
}
