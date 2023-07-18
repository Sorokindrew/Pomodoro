import { ActionCreator } from "redux"

export const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT'
export const ADD_TASK = 'ADD_TASK'

export type UpdateInputTextAction = {
    type: typeof UPDATE_INPUT_TEXT
    text: string
}

export type AddTaskAction = {
    type: typeof ADD_TASK
    task: string
}

export const updateInputText: ActionCreator<UpdateInputTextAction> = (text) => ({
    type: UPDATE_INPUT_TEXT,
    text
})

export const addTask: ActionCreator<AddTaskAction> = (task)=> ({
    type: ADD_TASK,
    task
})

