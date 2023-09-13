import { SelectWeekAction, SelectDayAction } from "./statistic/action"
import { UpdateInputTextAction, AddTaskAction, IncreasePomodoroAction, DecreasePomodoroAction, DeleteTaskAction, InitAppAction, CompletePomodoroAction } from "./task/actions"
import { DecreaseTimerAction, PauseTimerAction, ResetTimerAction, RunTimerAction } from "./timer/action"

export type Task = {
    id: number
    taskName: string
    taskDuration: number
    completedPomodoro: number
}
export type TaskState = {
    inputText: string
    taskList: Task[]
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

export type TimerState = {
    isTask: boolean
    time: number
    isStarted: boolean // Pomodoro or break started
    isRunned: boolean // Timer is runned (not on Pause) 
}

export type RootState = {
    task: TaskState
    statistic: StatisticState
    timer: TimerState
}

export type MyAction = UpdateInputTextAction
    | AddTaskAction
    | InitAppAction
    | IncreasePomodoroAction
    | DecreasePomodoroAction
    | DeleteTaskAction
    | SelectWeekAction
    | SelectDayAction
    | RunTimerAction
    | DecreaseTimerAction
    | PauseTimerAction
    | ResetTimerAction
    | CompletePomodoroAction