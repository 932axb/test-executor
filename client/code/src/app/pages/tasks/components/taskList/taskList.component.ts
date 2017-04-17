import {Component} from '@angular/core';

import 'style-loader!./taskList.scss';
import {TaskService} from '../../services/task.service'

import {Router} from '@angular/router';

@Component({
    selector: 'task-list',
    templateUrl: './taskList.html',
    providers: [TaskService]
})

export class TaskList {
    tasks:any[];
    error:any;

    constructor(private taskService:TaskService,
                private router:Router) {
        this.getTasks();
    }


    test(task) {
        console.log("click!");
        this.router.navigate(['/pages/tasks/detail/' + task.id]);
    }

    getTasks() {
        console.log("test");
        this.taskService
            .getTasks()
            .then(tasks => {
                return this.tasks = tasks
            })
            .catch(error => this.error = error);

    }

}
