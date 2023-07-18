import React from 'react'
import styles from './content.module.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Statistic } from '../Statistic/Statistic'


export function Content() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="statistic" element={<Statistic />} />
        </Routes>
    )
}