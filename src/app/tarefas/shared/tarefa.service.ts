import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable()
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage.getItem('tarefas');
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
  }

    buscarPorId(id : number): Tarefa {
    const tarefas : Tarefa[] = this.listarTodos();
    console.log(tarefas.find(tarefa => tarefa.id === id));
      return tarefas.find(tarefa => tarefa.id === id);
   }

  atualizar(tarefa: Tarefa): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      console.log(tarefa);
      if (tarefa.id == obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
  }

  remover(id: number): Tarefa[] {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
    return tarefas;
  }

  alterarStatus(id): Tarefa[] {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !objs[index].concluida;
      }
    });
    localStorage.removeItem('tarefas');
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
    return tarefas;
  }

}
