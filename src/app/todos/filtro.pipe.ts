import { fitrosValidos } from './../filtro/filtro.actions';
import { Todo } from './models/todo.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTodos',
})
export class FiltroPipe implements PipeTransform {
  transform(value: Todo[], filtro: fitrosValidos): unknown {
    switch (filtro) {
      case 'todos':
        return value;
      case 'completado':
        return value.filter((v) => v.completado);
      case 'pendientes':
        return value.filter((v) => !v.completado);
    }
  }
}
