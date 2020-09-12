import { fitrosValidos, filtroAction } from './../../filtro/filtro.actions';
import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: fitrosValidos = 'todos';
  filtros: fitrosValidos[] = ['todos', 'completado', 'pendientes'];
  pendientesCount: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.pendientesCount = state.todos.filter(
        (todo) => !todo.completado
      ).length;
    });
  }

  cambiarFiltro(filtro: fitrosValidos) {
    this.store.dispatch(filtroAction({ filtro }));
  }

  borrarCompletados() {
    this.store.dispatch(borrarCompletados());
  }
}
