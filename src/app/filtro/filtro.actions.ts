import { createAction, props } from '@ngrx/store';

export type fitrosValidos = 'todos' | 'completado' | 'pendientes';

export const filtroAction = createAction(
  '[Filtro] Set filter',
  props<{ filtro: fitrosValidos }>()
);
