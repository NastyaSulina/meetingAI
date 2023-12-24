import React from 'react'
import cn from 'classnames'
import { Button, ButtonType, Text, TextType } from '../../shared/components'
import styles from './LandingScreen.module.scss'

export const SecondScreen = () => {
    return (
        <div className={cn(styles.root, styles.point2)}>
            <div className={styles.rootContainer}>
                <div className={styles.numbering}>→ POINT 02</div>

                <div className={styles.textContainer}>
                    <Text textType={TextType.header} text='А что оно делает?' />
                    <Text
                        textType={TextType.bodyParagraph}
                        text='Points автоматически резюмирует ключевые моменты из ваших встреч, облегчая доступ к самой важной информации без необходимости просмотра всей записи встречи.'
                    />
                    <Button buttonType={ButtonType.black} text='Попробовать' onClick={() => {}} />
                </div>
            </div>
        </div>
    )
}
