import React from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import statisctic from '../../images/statistic.svg'
import logo from '../../images/tomato 1.svg'


export function Header() {
    return (
        <div className={styles.header}>
            <Link className={styles.logo} to="/">
                <img src={logo} alt={'Logo'} />
                <span>pomodoro_box</span>
            </Link>
            <Link className={styles.statistic} to="/statistic">
                <img src={statisctic} alt={"Statistic"} />
                <span>Статистика</span>
            </Link>
        </div>
    )
}