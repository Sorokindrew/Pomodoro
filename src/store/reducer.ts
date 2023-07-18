import { Reducer } from "redux";
import { ADD_TASK, AddTaskAction, UPDATE_INPUT_TEXT, UpdateInputTextAction } from "./actions";

export type RootState = {
    inputText: string
    taskList: string[]
}

const initialState: RootState = {
    inputText: '',
    taskList: []
}

type Action = UpdateInputTextAction | AddTaskAction

export const rootReducer: Reducer<RootState, Action> = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_INPUT_TEXT:
            return {...state, inputText: action.text};
        case ADD_TASK:
            let taskList = [...state.taskList, action.task]
            return {...state, taskList: taskList}
        default:
            return state;
    }
    
}