import { ActionCreator } from "redux";

export const INIT_APP = 'INIT_APP';
export const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';
export const ADD_TASK = 'ADD_TASK';
export const INCREASE_POMODORO = 'INCREASE_POMODORO';
export const DECREASE_POMODORO = 'DECREASE_POMODORO';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_POMODORO = 'COMPLETE_POMODORO';


export type InitAppAction = {
    type: typeof INIT_APP
};

export type IncreasePomodoroAction = {
    type: typeof INCREASE_POMODORO,
    id: number
};

export type DecreasePomodoroAction = {
    type: typeof DECREASE_POMODORO,
    id: number
};

export type UpdateInputTextAction = {
    type: typeof UPDATE_INPUT_TEXT
    text: string
};

export type AddTaskAction = {
    type: typeof ADD_TASK
    task: string
};

export type DeleteTaskAction = {
    type: typeof DELETE_TASK
    id: number
};

export type CompletePomodoroAction = {
    type: typeof COMPLETE_POMODORO
};

export const init_app: ActionCreator<InitAppAction> = () => ({
    type: INIT_APP
});

export const increase_pomodoro: ActionCreator<IncreasePomodoroAction> = (id) => ({
    type: INCREASE_POMODORO,
    id
});

export const decrease_pomodoro: ActionCreator<DecreasePomodoroAction> = (id) => ({
    type: DECREASE_POMODORO,
    id
});

export const updateInputText: ActionCreator<UpdateInputTextAction> = (text) => ({
    type: UPDATE_INPUT_TEXT,
    text
});

export const addTask: ActionCreator<AddTaskAction> = (task) => ({
    type: ADD_TASK,
    task
});

export const deleteTask: ActionCreator<DeleteTaskAction> = (id) => ({
    type: DELETE_TASK,
    id
});

export const complete_pomodoro: ActionCreator<CompletePomodoroAction> = () => ({
    type: COMPLETE_POMODORO
});