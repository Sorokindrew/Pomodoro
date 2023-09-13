import { Reducer } from "redux";
import { MyAction, StatisticState } from "../store";
import { initialState } from "../reducer";
import { SELECT_WEEK, SELECT_DAY } from "./action";

export const statistic: Reducer<StatisticState, MyAction> = (state = initialState.statistic, action: MyAction) => {
    switch (action.type) {
        case SELECT_WEEK:
            const stat = action.week;
            const newStatisticWeek = { ...state, activeWeek: stat };
            return newStatisticWeek;
        case SELECT_DAY:
            const day = action.day;
            const newStatisticDay = { ...state, activeDay: day };
            // const stateChangeStatisticDay = { ...state, statisticState: newStatisticDay };
            return newStatisticDay;
        default:
            return state;
    }
}