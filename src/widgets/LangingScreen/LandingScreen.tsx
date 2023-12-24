import React from 'react'
import cn from 'classnames'
import { Button, ButtonType, Text, TextType } from '../../shared/components'
import styles from './LandingScreen.module.scss'
// import Figures from './_assets/figures.png'

export const LandingScreen = () => {
    return (
        <div className={cn(styles.root, styles.mainScreen)}>
            <div className={styles.rootContainer}>
                <Text
                    text='Приложение для резюмирования Zoom-встреч'
                    textType={TextType.additionalText}
                />
                <h1 className={styles.heading}>points</h1>
                {/* <img className={styles.images} src={Figures} alt='' /> */}
                <div className={styles.buttonContainer}>
                    <Button
                        text='Скачать для Zoom Desktop'
                        buttonType={ButtonType.black}
                        ariaLabel=''
                        onClick={() => {}}
                    />
                </div>
            </div>
        </div>
    )
}
