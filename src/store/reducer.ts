import { combineReducers } from "redux";
import { RootState } from "./store";
import { task } from "./task/reducer";
import { statistic } from "./statistic/reducer";
import { timer } from "./timer/reducer";


export const initialState: RootState = {
    task: {
        inputText: '',
        taskList: []
    },
    statistic: {
        activeWeek: 'Эта неделя',
        activeDay: 'Среда',
        weeksStatistic: {
            thisWeek: [1, 2, 3, 4, 5, 6, 7],
            prevWeek: [8, 9, 10, 11, 12, 13, 14],
            twoWeeksAgo: [15, 16, 17, 18, 19, 20, 21]
        }
    },
    timer: {
        time: 25 * 60,
        isTask: true,
        isStarted: false,
        isRunned: false
    }
}


export const rootReducer = combineReducers({ task, statistic, timer });
