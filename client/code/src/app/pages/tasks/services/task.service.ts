import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
    private apiURL = 'http://localhost:5000/tasks/?format=json';

    constructor(private _http:Http) {
    }


    getTasks() {

        return this._http.get(this.apiURL)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getTask(id) {
        console.log("get task");
        let apiURL = 'http://localhost:5000/tasks/'+id+"/";

        return this._http.get(apiURL)
            .toPromise()
            .then(response => {
                console.log(response);
                return response.json()
            })
            .catch(this.handleError);

    }

    addTask(task) {
        console.log(task);
        let apiURL = 'http://localhost:5000/tasks/';
        let data = new URLSearchParams();

        data.append("requester", task.requester);
        data.append("interface", task.interface_);
        data.append("environment", task.environment);
        data.append("template", task.template);
        data.append("path", task.path);

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        return this._http.post(
            apiURL,
            data,
            {headers: headers}
        )
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }


    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}