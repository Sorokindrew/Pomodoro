import React from 'react';
import styles from './home.module.css';
import { HomeLeft } from './HomeLeft';
import { HomeRight } from './HomeRight';



export function Home() {
    
    return (
        <div className={styles.container}>
            <HomeLeft />
            <HomeRight />
        </div>
    )
}