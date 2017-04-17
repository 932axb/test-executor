import {Component} from '@angular/core';

import 'style-loader!./newTask.scss';

import {EnvironmentService} from '../../services/environment.service'
import {InterfaceService} from '../../services/interface.service'
import {TemplateService} from '../../services/template.service'
import {TaskService} from '../../services/task.service'

import {Task}    from './task.model';
import {Router} from '@angular/router';

@Component({
    selector: 'new-task',
    templateUrl: './newTask.html',
    providers: [EnvironmentService, InterfaceService, TemplateService, TaskService]

})
export class NewTask {

    environments:any[];
    interfaces:any[];
    templates:any[];
    error:any;
    submitted = false;

    // model = new Task("bla_bla", this.environments[0]);
    model = new Task("", '', '', '', '');

    constructor(private taskService:TaskService,
                private environmentService:EnvironmentService,
                private interfaceService:InterfaceService,
                private templateService:TemplateService,
                private router:Router) {
        this.getEnvironments();
        this.getInterfaces();
        this.getTemplates();
    }

    onSubmit() {
        this.submitted = true;
    }

    openList() {
        this.router.navigate(['/pages/tasks/list']);
    }


    getEnvironments() {
        console.log("getEnvironments");
        this.environmentService
            .getEnvironments()
            .then(tasks => this.environments = tasks)
            .catch(error => this.error = error);

    }

    getInterfaces() {
        console.log("getInterfaces");
        this.interfaceService
            .getList()
            .then(interfaces => this.interfaces = interfaces)
            .catch(error => this.error = error);
    }

    getTemplates() {
        console.log("getTemplates");
        this.templateService
            .getList()
            .then(templates => this.templates = templates)
            .catch(error => this.error = error);
    }

    newTask() {
        console.log(this.model);
        this.taskService.addTask(this.model)
            .then(this.openList());
    }

}
