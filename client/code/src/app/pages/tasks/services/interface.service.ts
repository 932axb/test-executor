import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
// import {URLSearchParams} from "@angular/http"

@Injectable()
export class InterfaceService {
    private apiURL = 'http://localhost:5000/interface/?format=json';

    constructor(private _http:Http) {}


    getList() {

        return this._http.get(this.apiURL)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }


    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}