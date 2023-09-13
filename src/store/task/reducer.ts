import { Reducer } from "redux";
import { MyAction, Task, TaskState } from "../store";
import { initialState } from "../reducer";
import { ADD_TASK, COMPLETE_POMODORO, DECREASE_POMODORO, DELETE_TASK, INCREASE_POMODORO, INIT_APP, UPDATE_INPUT_TEXT } from "./actions";

export const task: Reducer<TaskState, MyAction> = (state = initialState.task, action: MyAction) => {
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
            return {
                ...state,
                inputText: action.text
            };
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
                taskDuration: 1,
                completedPomodoro: 0
            }
            let taskList = [...state.taskList, newTask];
            const newState = { ...state, taskList: taskList };
            localStorage.setItem('store', JSON.stringify(newState));
            return newState;
        case DELETE_TASK:
            let taskListWithoutDeleted = [...state.taskList]
            taskListWithoutDeleted = taskListWithoutDeleted.filter(task => task.id !== action.id);
            const newStateWithoutDeleted = { ...state, taskList: taskListWithoutDeleted };
            localStorage.setItem('store', JSON.stringify(newStateWithoutDeleted));
            return newStateWithoutDeleted;
        case COMPLETE_POMODORO:
            let taskListCompetedPomodoro = [...state.taskList];
            //add competed pomodoro to first task
            taskListCompetedPomodoro[0].completedPomodoro += 1;
            if (taskListCompetedPomodoro[0].completedPomodoro >= taskListCompetedPomodoro[0].taskDuration) {
                taskListCompetedPomodoro.shift();
            }
            return {...state, taskList: taskListCompetedPomodoro};
        default:
            return state;
    }

}