import React, { useState } from "react";
import styles from './weekDrop.module.css';
import { DropArrow } from "../Icons";
import { selectWeek } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import classNames from "classnames";


export function WeekDrop() {
    const activeWeek = useSelector<RootState, string>(state => state.statisticState.activeWeek);
    const dispatch = useDispatch();
    const [isDropdownOpened, setIsDropdownOpened] = useState(false);
    const [buttonClasses, setButtonClasses] = useState(classNames(styles.button));

    const handleClick = (week: string) => {
        dispatch(selectWeek(week));
        setIsDropdownOpened(false);
        setButtonClasses(classNames(styles.button));
    }


    const handleButtonClick = () => {
        setIsDropdownOpened(prev => !prev);
        if (!isDropdownOpened) {
            const activeClass = classNames(
                styles.button,
                styles.active
            );
            setButtonClasses(activeClass);
        }
        else {
            setButtonClasses(classNames(styles.button));
        }

    }

    return (
        <div className={styles.week}>
            {!isDropdownOpened && <p className={styles.selected}>{activeWeek}</p>}
            <button className={buttonClasses} onClick={handleButtonClick}><DropArrow /></button>
            {isDropdownOpened && <ul className={styles.list}>
                <li className={styles.list_item} onClick={() => handleClick('Эта неделя')}>Эта неделя</li>
                <li className={styles.list_item} onClick={() => handleClick('Прошедшая неделя')}>Прошедшая неделя</li>
                <li className={styles.list_item} onClick={() => handleClick('Две недели назад')}>Две недели назад</li>
            </ul>}

        </div>
    )
}