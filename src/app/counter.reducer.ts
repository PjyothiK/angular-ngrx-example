import { createReducer, on } from '@ngrx/store';
//import { State } from '@ngrx/store/src';
import { increment, decrement, reset } from './counter.actions';

const initialState = 99;
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return state + 1;
  }),
  on(decrement, (state) => {
    return state - 1;
  }),
  on(reset, (state) => {
    return 0;
  })
);
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
