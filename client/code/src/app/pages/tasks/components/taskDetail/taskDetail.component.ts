import {Component, Input} from '@angular/core';

import 'style-loader!./taskDetail.scss';
import {TaskService} from '../../services/task.service'

import {ActivatedRoute} from '@angular/router';
import {Task} from '../../models/task.model';

@Component({
    selector: 'task-detail',
    templateUrl: './taskDetail.html',
    providers: [TaskService]
})

export class TaskDetail {
    task:any;
    error:any;

    private sub:any;


    constructor(private taskService:TaskService, private route:ActivatedRoute) {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            console.log(id);

            this.getTask(id);
        })
    }


    getTask(id) {
        this.taskService
            .getTask(id)
            .then(task => {
                console.log(task);
                this.task = task;
                console.log(this.task);
                return})
            .catch(error => this.error = error);

    }

}
