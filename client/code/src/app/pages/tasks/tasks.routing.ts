import { Routes, RouterModule }  from '@angular/router';

import { Tasks } from './tasks.component';
import { TaskList } from './components/taskList/taskList.component';
import { NewTask } from './components/newTask/newTask.component';
import { TaskDetail } from './components/taskDetail/taskDetail.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tasks,
    children: [
      { path: 'list', component: TaskList },
      { path: 'new', component: NewTask },
      { path: 'detail/:id', component: TaskDetail },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
