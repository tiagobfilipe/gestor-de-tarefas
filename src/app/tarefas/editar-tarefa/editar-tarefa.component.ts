import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {Tarefa, TarefaService} from "../shared";

@Component({
  selector: 'app-editar-tarefa',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule
  ],
  providers : [
    TarefaService,
  ],
  templateUrl: './editar-tarefa.component.html',
  styleUrl: './editar-tarefa.component.css'
})
export class EditarTarefaComponent {
  public router : Router;
  public tarefa: Tarefa;
  public submitted : boolean;
  private id : string;

  public form: FormGroup = new FormGroup({
    nome : new FormControl('')
  });
  private tarefaService: TarefaService;

  constructor(private routea: ActivatedRoute) {
    this.router = new Router();
    this.tarefaService = new TarefaService();
    this.routea.params.subscribe(params => {
      this.id = params['id'];
    });


    this.tarefa = this.tarefaService.buscarPorId(Number(this.id));
    this.form = new FormGroup({
      nome : new FormControl(this.tarefa.nome, Validators.required)
    });
    this.submitted = false;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.valid){
      let tarefaService : TarefaService = new TarefaService();
      let tarefa = new Tarefa();
      tarefa.id = Number(this.id);
      tarefa.nome = this.form.value.nome;
      tarefa.concluida = false;
      this.tarefaService.atualizar(tarefa);
      this.router.navigate(["/tarefas/listar"]);
    }

  }
}
