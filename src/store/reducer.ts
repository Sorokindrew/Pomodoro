import { Reducer } from "redux";
import { ADD_TASK, AddTaskAction, DECREASE_POMODORO, DELETE_TASK, DecreasePomodoroAction, DeleteTaskAction, INCREASE_POMODORO, INIT_APP, IncreasePomodoroAction, InitAppAction, SELECT_DAY, SELECT_WEEK, SelectDayAction, SelectWeekAction, UPDATE_INPUT_TEXT, UpdateInputTextAction } from "./actions";

export type Task = {
    id: number
    taskName: string
    taskDuration: number
}

export type StatisticState = {
    activeWeek: string;
    activeDay: string;
    weeksStatistic: {
        thisWeek: number[];
        prevWeek: number[];
        twoWeeksAgo: number[];
    };
}

export type RootState = {
    inputText: string
    taskList: Task[]
    statisticState: StatisticState
    timer: number
}

const initialState: RootState = {
    inputText: '',
    taskList: [],
    statisticState: {
        activeWeek: 'Эта неделя',
        activeDay: 'Среда',
        weeksStatistic: {
            thisWeek: [1, 2,3, 4, 5, 6, 7],
            prevWeek: [8, 9, 10, 11, 12, 13, 14],
            twoWeeksAgo: [15, 16, 17, 18, 19, 20, 21]
        }
    },
    timer: 25*60
}

type Action = UpdateInputTextAction
    | AddTaskAction
    | InitAppAction
    | IncreasePomodoroAction
    | DecreasePomodoroAction
    | DeleteTaskAction
    | SelectWeekAction
    | SelectDayAction

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
            const newStateWithoutDeleted = { ...state, taskList: taskListWithoutDeleted };
            localStorage.setItem('store', JSON.stringify(newStateWithoutDeleted));
            return newStateWithoutDeleted;

        case SELECT_WEEK:
            const stat = action.week;
            const newStatisticWeek = { ...state.statisticState, activeWeek: stat };
            const stateChangeStatisticWeek = { ...state, statisticState: newStatisticWeek };
            return stateChangeStatisticWeek;
        case SELECT_DAY:
            const day = action.day;
            const newStatisticDay = { ...state.statisticState, activeDay: day };
            const stateChangeStatisticDay = { ...state, statisticState: newStatisticDay };
            return stateChangeStatisticDay;
        default:
            return state;
    }
}