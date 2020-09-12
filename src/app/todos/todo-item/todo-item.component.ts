import { editarTodo, toggleTodo, eliminarTodo } from './../todo.actions';
import { AppState } from './../../app.reducer';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../models/todo.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @ViewChild('inputEditar') txtEditar: ElementRef;

  chkCompletado: FormControl;

  txtInput: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(() => {
      this.store.dispatch(toggleTodo({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;
    // this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtEditar.nativeElement.select();
    }, 100);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      return;
    }

    this.store.dispatch(
      editarTodo({ id: this.todo.id, texto: this.txtInput.value })
    );
  }

  eliminar() {
    this.store.dispatch(eliminarTodo({ id: this.todo.id }));
  }
}
