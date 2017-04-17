import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';

import {routing}       from './tasks.routing';
import {Tasks} from './tasks.component';
import {TaskList} from './components/taskList/taskList.component';
import {NewTask} from './components/newTask/newTask.component';
import {TaskDetail} from './components/taskDetail/taskDetail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        Ng2SmartTableModule,
    ],
    declarations: [
        Tasks,
        TaskList,
        NewTask,
        TaskDetail
    ],
    providers: [
        // BasicTablesService,
        // SmartTablesService,
    ]
})
export class TasksModule {
}
