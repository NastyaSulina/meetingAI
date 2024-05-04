import React from 'react'
import cn from 'classnames'
import {
    Highlights,
    HighlightsType,
    Button,
    ButtonType,
    Eye,
    Figure,
    FigureType,
} from '@/shared/ui'
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
            <Menu withLinks />

            {/* Главный баннер */}

            <section className={cn(styles.section)}>
                <div className={cn(styles.pointContainer, styles.mainSection)}>
                    <h1 className={styles.description}>Приложение для резюмирования Zoom-встреч</h1>
                    <div className={styles.headerContainer}>
                        <img className={styles.heading} src={Heading} alt='' />
                        <div className={styles.eye}>
                            <Eye />
                        </div>
                    </div>
                    <div className={styles.figures}>
                        <Figure
                            figureType={FigureType.CIRCLES}
                            width={300}
                            height={160}
                            fill='var(--Green)'
                        >
                            <span className={styles.figureText}>Быстрый обзор ваших встреч</span>
                        </Figure>
                        <Figure
                            figureType={FigureType.ARC}
                            width={320}
                            height={160}
                            fill='var(--Basic-Black)'
                        />
                        <Figure
                            figureType={FigureType.STAR}
                            width={315}
                            height={315}
                            fill='var(--Orange)'
                        >
                            <span className={styles.figureText}>
                                Экономьте время, не пропуская важное
                            </span>
                        </Figure>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            text='Скачать для Zoom Desktop'
                            buttonType={ButtonType.black}
                            ariaLabel=''
                            onClick={downloadApp}
                            isAnimated
                        />
                    </div>
                </div>
            </section>

            {/* Первый экран: Point 01 */}

            <section className={cn(styles.section, styles.isBlack)}>
                <div className={cn(styles.pointContainer, styles.pointFirst)} data-aos='fade-in'>
                    <div className={styles.numbering}>→ POINT 01</div>
                    <div className={styles.text}>
                        В сфере IT, удалённом обучении и бизнесе стало очень{' '}
                        <Highlights
                            highlightsType={HighlightsType.stroke}
                            isTextColorLight
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
            </section>

            {/* Второй экран: Point 02 */}

            <section id='purpose' data-test-id='purpose' className={styles.section}>
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
                            isAnimated
                        />
                    </div>
                </div>
            </section>

            {/* Третий экран: Point 03 */}

            <section className={cn(styles.section, styles.isGray)}>
                <div className={cn(styles.pointContainer, styles.pointThird)}>
                    <div className={styles.numbering}>→ POINT 03</div>
                    <h2 className={styles.header}>Points поможет с:</h2>
                    <div className={styles.highlightsContainer} data-aos='slide-right'>
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

                    <div className={styles.figures}>
                        <Figure
                            figureType={FigureType.ARC}
                            width={320}
                            height={160}
                            fill='var(--Basic-Black)'
                        />
                    </div>
                </div>
            </section>

            {/* Четвертый экран: Point 04 */}

            <section id='cards' data-test-id='cards' className={styles.section}>
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
            </section>

            <Footer withForm />
        </div>
    )
}
