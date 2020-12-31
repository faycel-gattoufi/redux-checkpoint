import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE, EDIT_TASK } from "../const";

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleComplete = (id) => ({
  type: TOGGLE_COMPLETE,
  payload: id,
});

export const editTask = (editedTask) => ({
 
  type: EDIT_TASK,
  payload: editedTask,

});