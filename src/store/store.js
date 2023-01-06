import { createStore } from "./createStore";
import { taskReducer } from "./taskReducer";

const initialState = [
    { id: 1, title: "task 1", completed: false },
    { id: 2, title: "task 2", completed: false },
];

export function initialeStore() {
    return createStore(taskReducer, initialState);
}
