import React from 'react'
import styles from './instruction.module.css'

export function Instruction() {
    return (
        <>
            <h3 className={styles.title}>Ура! Теперь можно начать работать:</h3>
            <ul className={styles.list}>
                <li className={styles.list_item}>Выберите категорию и напишите название текущей задачи</li>
                <li className={styles.list_item}>Запустите таймер («помидор»)</li>
                <li className={styles.list_item}>Работайте пока «помидор» не прозвонит</li>
                <li className={styles.list_item}>Сделайте короткий перерыв (3-5 минут)</li>
                <li className={styles.list_item}>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).</li>
            </ul>
        </>
    )

}