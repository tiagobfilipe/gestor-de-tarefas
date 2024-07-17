import {Component, OnInit} from '@angular/core';
import {Tarefa, TarefaService} from "../shared";
import {ActivatedRoute, RouterLink, Router} from "@angular/router";

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    RouterLink
  ],
  providers : [
    TarefaService
  ],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  private router : Router;
  public activatedRoute: ActivatedRoute

  tarefas : Tarefa[];
  constructor(private tarefaService : TarefaService) {
    this.router = new Router();
  }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos() : Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  navigateTo(id: number): void {
    this.router.navigate(['/tarefas/editar', id]);
  }

  remover(id: number): void {
    if(confirm("Têm a certeza?")){
    this.tarefas = this.tarefaService.remover(id);
    }
  }

  atualizar(id: number): void {
    this.tarefas = this.tarefaService.alterarStatus(id);
  }

}
