import { createAction, props } from "@ngrx/store";
export const addTodo = createAction('ADD_TODO');
export const addItem = createAction('ADD_ITEM', props<{user: string}>());