import { Reducer } from "react";
import { initialState } from "../reducer";
import { MyAction, TimerState } from "../store";
import { DECREASE_TIMER_TIME, PAUSE_TIMER, RESET_TIMER, RUN_TIMER } from "./action";

export const timer: Reducer<TimerState, MyAction> = (state = initialState.timer, action: MyAction) => {
    switch (action.type) {
        case RUN_TIMER:
            return { ...state, isStarted: true, isRunned: true };
        case PAUSE_TIMER:
            return { ...state, isRunned: false };
        case RESET_TIMER:
            return { ...state, isRunned: false, isStarted: false, time: 25 * 60 };
        case DECREASE_TIMER_TIME:
            return { ...state, time: state.time - 1 };
        default:
            return state;
    }
}