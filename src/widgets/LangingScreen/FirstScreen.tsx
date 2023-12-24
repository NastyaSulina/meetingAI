import React from 'react'
import cn from 'classnames'
import { Highlights, HighlightsType } from '../../shared/components'
import styles from './LandingScreen.module.scss'

export const FirstScreen = () => {
    return (
        <div className={cn(styles.root, styles.point1)}>
            <div className={styles.rootContainer}>
                <div className={styles.numbering}>→ POINT 01</div>
                <div className={styles.text}>
                    В сфере IT, удалённом обучении и бизнесе <br /> стало очень{' '}
                    <Highlights
                        text='много онлайн-встреч'
                        isLight
                        highlightsType={HighlightsType.stroke}
                    />
                    <br /> В силу их большого количества и возможных пересечений, становится сложно
                    удерживать всю информацию в голове. Наше приложение разработано для того, чтобы
                    помочь вам{' '}
                    <Highlights
                        text='справиться с этой проблемой'
                        highlightsType={HighlightsType.greenFill}
                    />
                </div>
            </div>
        </div>
    )
}
