import React from 'react'
import cn from 'classnames'
import { Highlights, HighlightsType, Button, ButtonType, Eye } from '@/shared/ui'
import { Menu, Footer, CardsWidget } from '@/widgets'
import Heading from '@/shared/assets/points.png'
import { downloadApp } from '@/shared/utils'
import styles from './LandingPage.module.scss'

/*
    Эта страница намеренно не была разделена на составные части — отдельные экраны,
    потому что в данном лендинге содержится только статичная информация:
    нет необходимости декомпозировать экраны с неповторяющимися картинками и текстом.
*/

export const LandingPage = () => {
    return (
        <div className={styles.root}>
            <Menu />

            {/* Главный баннер */}

            <div className={cn(styles.screen)}>
                <div className={cn(styles.pointContainer, styles.mainScreen)}>
                    <span className={styles.description}>
                        Приложение для резюмирования Zoom-встреч
                    </span>
                    <div className={styles.headerContainer}>
                        <img className={styles.heading} src={Heading} alt='' />
                        <div className={styles.eye}>
                            <Eye />
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            text='Скачать для Zoom Desktop'
                            buttonType={ButtonType.black}
                            ariaLabel=''
                            onClick={downloadApp}
                        />
                    </div>
                </div>
            </div>

            {/* Первый экран: Point 01 */}

            <div className={cn(styles.screen, styles.isBlack)}>
                <div className={cn(styles.pointContainer, styles.pointFirst)} data-aos='fade-in'>
                    <div className={styles.numbering}>→ POINT 01</div>
                    <div className={styles.text}>
                        В сфере IT, удалённом обучении и бизнесе стало очень{' '}
                        <Highlights
                            isTextColorLight
                            highlightsType={HighlightsType.stroke}
                            text='много онлайн-встреч'
                        />
                        <br />В силу их большого количества и возможных пересечений, становится
                        сложно удерживать всю информацию в голове. Наше приложение разработано для
                        того, чтобы помочь вам{' '}
                        <Highlights
                            highlightsType={HighlightsType.greenFill}
                            text='справиться с этой проблемой'
                        />
                    </div>
                </div>
            </div>

            {/* Второй экран: Point 02 */}

            <div id='pointSecond' className={styles.screen}>
                <div className={cn(styles.pointContainer, styles.pointSecond)} data-aos='slide-up'>
                    <div className={styles.numbering}>→ POINT 02</div>
                    <div className={styles.text}>
                        <h2 className={styles.header}>А что оно делает?</h2>
                        <span className={styles.additionalText}>
                            <b>Points </b>автоматически резюмирует ключевые моменты из ваших встреч,
                            облегчая доступ к самой важной информации без необходимости просмотра
                            всей записи встречи.
                        </span>
                        <Button
                            buttonType={ButtonType.black}
                            text='Попробовать'
                            onClick={downloadApp}
                        />
                    </div>
                </div>
            </div>

            {/* Третий экран: Point 03 */}

            <div className={cn(styles.screen, styles.isGray)}>
                <div className={cn(styles.pointContainer, styles.pointThird)}>
                    <div className={styles.numbering}>→ POINT 03</div>
                    <h2 className={styles.header}>Points поможет с:</h2>
                    <div className={styles.text} data-aos='slide-right'>
                        <Highlights
                            withArrow
                            highlightsType={HighlightsType.gradientFill}
                            text='регулярными рабочими встречами'
                        />
                        <Highlights
                            withArrow
                            highlightsType={HighlightsType.greenFill}
                            text='бизнес-встречами'
                        />
                        <Highlights
                            withArrow
                            highlightsType={HighlightsType.stroke}
                            text='учебными собраниями'
                        />
                        <Highlights
                            withArrow
                            highlightsType={HighlightsType.stroke}
                            text='личными звонками'
                        />
                    </div>
                </div>
            </div>

            {/* Четвертый экран: Point 04 */}

            <div id='pointFourth' className={styles.screen}>
                <div className={cn(styles.pointContainer, styles.pointFourth)}>
                    <div className={styles.numbering}>→ POINT 04</div>
                    <h2 className={styles.header}>Итоги встречи</h2>
                    <div className={styles.text}>
                        По итогам встречи с Points вы получите информацию о прошедшем zoom звонке.
                        Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой
                        конференции!
                    </div>
                    <div data-aos='zoom-in'>
                        <CardsWidget />
                    </div>
                </div>
            </div>

            <Footer withForm />
        </div>
    )
}
