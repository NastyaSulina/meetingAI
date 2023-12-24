import React from 'react'
import { LandingScreen, FirstScreen, SecondScreen } from '../../widgets/LangingScreen'
import styles from './LandingPage.module.scss'
import { Menu } from '../../widgets/Menu'

const LandingPage = () => {
    return (
        <div className={styles.root}>
            <Menu />
            <LandingScreen />
            <FirstScreen />
            <SecondScreen />
        </div>
    )
}

export default LandingPage
