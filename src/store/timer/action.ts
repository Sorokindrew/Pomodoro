import { ActionCreator } from "redux";

export const RUN_TIMER = 'RUN_TIMER';
export const PAUSE_TIMER = 'PAUSE_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const DECREASE_TIMER_TIME = 'DECREASE_TIMER_TIME';

export type RunTimerAction = {
    type: typeof RUN_TIMER
};

export type PauseTimerAction = {
    type: typeof PAUSE_TIMER
};

export type ResetTimerAction = {
    type: typeof RESET_TIMER
};

export type DecreaseTimerAction = {
    type: typeof DECREASE_TIMER_TIME
};

export const run_timer: ActionCreator<RunTimerAction> = () => ({
    type: RUN_TIMER
});

export const pause_timer: ActionCreator<PauseTimerAction> = () => ({
    type: PAUSE_TIMER
});

export const reset_timer: ActionCreator<ResetTimerAction> = () => ({
    type: RESET_TIMER
});

export const decrease_timer: ActionCreator<DecreaseTimerAction> = () => ({
    type: DECREASE_TIMER_TIME
});