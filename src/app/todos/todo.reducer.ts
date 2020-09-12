import { Todo } from './models/todo.model';
import { createReducer, on } from '@ngrx/store';
import {
  crearTodo,
  toggleTodo,
  editarTodo,
  eliminarTodo,
  toggleAll,
  borrarCompletados,
} from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar el escudo del capitan america'),
];

const _todoReducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
  on(eliminarTodo, (state, { id }) => state.filter((st) => st.id !== id)),
  on(borrarCompletados, (state) => state.filter((st) => !st.completado)),
  on(toggleAll, (state, { completado }) =>
    state.map((st) => ({ ...st, completado }))
  ),
  on(toggleTodo, (state, { id }) => {
    return state.map((st) => {
      if (st.id === id) {
        return { ...st, completado: !st.completado };
      } else {
        return { ...st };
      }
    });
  }),
  on(editarTodo, (state, { id, texto }) => {
    return state.map((st) => {
      if (st.id === id) {
        return { ...st, texto };
      } else {
        return { ...st };
      }
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
