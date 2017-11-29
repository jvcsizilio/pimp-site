import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ApiProvider } from './../providers/ApiProvider';

import { User } from '../models/user';
import { Catador } from '../models/catador';


@Injectable()
export class CatadorDataService {

    public url: string;

    constructor(public http: Http, public apiProvider: ApiProvider) {
        this.url = this.apiProvider.url + 'api/catadores/';
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json');
    }

    save(catador: any) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        return this.http.post(this.url + 'add/', catador, {
            headers: headers
        }).timeout(30000);
    }

    saveCatador(catador: Catador) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        return this.http.post(this.url, catador, {
            headers: headers
        }).timeout(30000);
    }

    registerPhones(phones, catadorId) {
        let url = this.url + catadorId + '/phones/';
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        return this.http.post(url, phones, {
            headers: headers
        });
    }

    updateLocation(location, catadorId) {
        let url = this.url + catadorId + '/georef/';
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        return this.http.post(url, location, {
            headers: headers
        });
    }

}
