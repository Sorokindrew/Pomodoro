import { Reducer } from "redux";
import { ADD_TASK, AddTaskAction, DECREASE_POMODORO, DELETE_TASK, DecreasePomodoroAction, DeleteTaskAction, INCREASE_POMODORO, INIT_APP, IncreasePomodoroAction, InitAppAction, UPDATE_INPUT_TEXT, UpdateInputTextAction } from "./actions";

export type Task = {
    id: number
    taskName: string
    taskDuration: number
}

export type RootState = {
    inputText: string
    taskList: Task[]
}

const initialState: RootState = {
    inputText: '',
    taskList: []
}

type Action = UpdateInputTextAction | AddTaskAction | InitAppAction | IncreasePomodoroAction | DecreasePomodoroAction | DeleteTaskAction

export const rootReducer: Reducer<RootState, Action> = (state = initialState, action) => {
    switch (action.type) {
        case INIT_APP:
            const savedState = localStorage.getItem('store');
            if (savedState === null) {
                return state;
            }
            else {
                const tasks = JSON.parse(savedState).taskList
                return { ...state, taskList: tasks }
            }
        case UPDATE_INPUT_TEXT:
            return { ...state, inputText: action.text };
        case INCREASE_POMODORO:
            const taskToIncrease = state.taskList.find(el => el.id === action.id)
            if (taskToIncrease === undefined) {
                return state
            }
            else {
                const indexOfTaskToIncrease = state.taskList.indexOf(taskToIncrease)
                const updatedTaskIncreased = { ...taskToIncrease, taskDuration: taskToIncrease.taskDuration + 1 }
                let updatedTaskListIncreased = [...state.taskList]
                updatedTaskListIncreased.splice(indexOfTaskToIncrease, 1, updatedTaskIncreased)
                const newStatePomodoroIncreased = { ...state, taskList: updatedTaskListIncreased }
                localStorage.setItem('store', JSON.stringify(newStatePomodoroIncreased));
                return newStatePomodoroIncreased;
            }
        case DECREASE_POMODORO:
            const taskToDecrease = state.taskList.find(el => el.id === action.id)
            if (taskToDecrease === undefined) {
                return state
            }
            else {
                const indexOfTaskToDecrease = state.taskList.indexOf(taskToDecrease)
                const updatedTaskDecreased = { ...taskToDecrease, taskDuration: taskToDecrease.taskDuration - 1 }
                let updatedTaskListDecreased = [...state.taskList]
                updatedTaskListDecreased.splice(indexOfTaskToDecrease, 1, updatedTaskDecreased)
                const newStatePomodoroDecreased = { ...state, taskList: updatedTaskListDecreased }
                localStorage.setItem('store', JSON.stringify(newStatePomodoroDecreased));
                return newStatePomodoroDecreased;
            }
        case ADD_TASK:
            const newTask: Task = {
                id: Date.now(),
                taskName: action.task,
                taskDuration: 1
            }
            let taskList = [...state.taskList, newTask];
            const newState = { ...state, taskList: taskList };
            localStorage.setItem('store', JSON.stringify(newState));
            return newState;
        case DELETE_TASK:
            let taskListWithoutDeleted = [...state.taskList]
            taskListWithoutDeleted = taskListWithoutDeleted.filter(task => task.id !== action.id);
            const newStateWithoutDeleted = { ...state, taskList: taskListWithoutDeleted};
            localStorage.setItem('store', JSON.stringify(newStateWithoutDeleted));
            return newStateWithoutDeleted;
        default:
            return state;
    }
}