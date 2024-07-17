import { Routes} from "@angular/router";
import { ListarComponent} from "./listar";
import {RegistoComponent} from "./registar/registo/registo.component";
import {EditarTarefaComponent} from "./editar-tarefa";

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas/listar',
    component : ListarComponent
  },
  {
    path: 'tarefas/registo',
    component : RegistoComponent
  },
  {
    path: 'tarefas/editar/:id',
    component : EditarTarefaComponent
  }
];
