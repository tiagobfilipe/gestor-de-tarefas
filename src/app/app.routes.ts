import { Routes } from '@angular/router';
import {TarefaRoutes} from "./tarefas/tarefas-routing.module";

export const routes: Routes = [{
  path : '',
  redirectTo: '/tarefas/listar',
  pathMatch: 'full',
},
  ...TarefaRoutes
];
