import React from 'react'
import styles from './layout.module.css'
import { Header } from '../Header/Header'
import { BrowserRouter } from 'react-router-dom'
import { Content } from '../Content/Content'


export function Layout() {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <Header />
                <Content />
            </div>
        </BrowserRouter>
    )
}