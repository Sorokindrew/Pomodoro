import { ActionCreator } from "redux";

export const SELECT_WEEK = 'SELECT_WEEK';
export const SELECT_DAY = 'SELECT_DAY';

export type SelectWeekAction = {
    type: typeof SELECT_WEEK
    week: string
};

export type SelectDayAction = {
    type: typeof SELECT_DAY
    day: string
};

export const selectWeek: ActionCreator<SelectWeekAction> = (week) => ({
    type: SELECT_WEEK,
    week
});

export const selectDay: ActionCreator<SelectDayAction> = (day) => ({
    type: SELECT_DAY,
    day
});