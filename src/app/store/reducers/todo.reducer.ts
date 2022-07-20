import { createReducer, on } from "@ngrx/store";
import { addTodo, addItem } from "../actions/todo.actions";
export const initialState = [{
    id: 1,
    title: "Hello"
}]

const todoReducer = createReducer(
    initialState,
    on(addTodo, (state: any, action) => [...state, {id: 2, title: "Xin chao"}]),
    on(addItem, (state: any, action) => {
        console.log(action);
        return state;
    })
)

export default todoReducer;