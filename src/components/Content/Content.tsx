import React from 'react'
import styles from './content.module.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import { Statistic } from '../Statistic'


export function Content() {
    return (
        <div className={styles.container}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="statistic" element={<Statistic />} />
            </Routes>
        </div>
    )
}