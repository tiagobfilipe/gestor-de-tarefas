import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import {ListarComponent} from "./listar";
import {EditarTarefaComponent} from "./editar-tarefa";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListarComponent,
    EditarTarefaComponent,
  ],
  providers : [
    TarefaService
  ]
})
export class TarefaModule { }
