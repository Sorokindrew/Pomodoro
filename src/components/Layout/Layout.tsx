import React from 'react'
import styles from './layout.module.css'
import { Header } from '../Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Statistic } from '../Statistic/Statistic'


export function Layout() {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="statistic" element={<Statistic />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}