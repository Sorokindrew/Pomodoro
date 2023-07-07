import React from 'react'
import styles from './statistic.module.css'
import { Button } from '../Button/Button'



export function Statistic() {
    return (
        <div className={styles.statistic}>
           <p>Statistic screen</p>
           <Button text={'Старт'} />
        </div>
    )
}