import {Component, ViewChild} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { TarefaService, Tarefa} from "../../shared";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registo.component.html',
  styleUrl: './registo.component.css'
})

export class RegistoComponent {
  public router : Router;
  public tarefa: Tarefa;
  public submitted : boolean;

  public form: FormGroup = new FormGroup({
    nome : new FormControl('')
  });

  constructor() {
    this.router = new Router();
    this.tarefa = new Tarefa();
    this.form = new FormGroup({
      nome : new FormControl('', Validators.required)
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
      tarefa.nome = this.form.value.nome;
      tarefa.concluida = false;
      tarefaService.cadastrar(tarefa);
      this.router.navigate(["/tarefas/listar"]);
    }

  }


}


