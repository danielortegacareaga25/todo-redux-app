import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
  '[TODO] Creat todo',
  props<{ texto: string }>()
);

export const toggleTodo = createAction(
  '[TODO] toggle todo',
  props<{ id: number }>()
);

export const editarTodo = createAction(
  '[TODO] editar todo',
  props<{ id: number; texto: string }>()
);

export const eliminarTodo = createAction(
  '[TODO] eliminar todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] toggle all todo',
  props<{ completado: boolean }>()
);

export const borrarCompletados = createAction('[TODO] borrar completado todo');
