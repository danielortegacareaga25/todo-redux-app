import { filtroAction, fitrosValidos } from './filtro.actions';

import { createReducer, on } from '@ngrx/store';

export const initialState: fitrosValidos = 'todos';

const _filtroReducer = createReducer(
  initialState,
  on(filtroAction, (_, { filtro }) => filtro)
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
