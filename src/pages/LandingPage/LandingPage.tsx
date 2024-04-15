import React from 'react'
import cn from 'classnames'
import {
    Highlights,
    HighlightsType,
    Text,
    TextType,
    Button,
    ButtonType,
    Figure,
    FigureType,
} from '../../shared/components'
import styles from './LandingPage.module.scss'
import { Menu, Footer, CardsWidget } from '../../widgets'
import Figures from './_assets/figures.png'
import Heading from './_assets/points.png'

export const LandingPage = () => {
    return (
        <>
            <Menu />

            {/* Главный баннер */}

            <div className={cn(styles.screen, styles.mainScreen)}>
                <div className={styles.screenContainer}>
                    <Text
                        text='Приложение для резюмирования Zoom-встреч'
                        textType={TextType.additionalText}
                    />
                    <img className={styles.heading} src={Heading} alt='' />
                    <img className={styles.images} src={Figures} alt='' />
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

            {/* Первый экран: Point 01 */}

            {/* <div className={cn(styles.screen, styles.pointFirst)}>
                <div className={styles.screenContainer}>
                    <div className={styles.numbering}>→ POINT 01</div>
                    <div className={styles.textContainer}>
                        <Text
                            textType={TextType.header}
                            text='В сфере IT, удалённом обучении и бизнесе стало очень '
                        />
                        <Highlights
                            isTextColorLight
                            highlightsType={HighlightsType.stroke}
                            text='много онлайн-встреч'
                        />
                        <br />
                        <Text
                            textType={TextType.header}
                            text='В силу их большого количества и возможных пересечений, становится сложно
                        удерживать всю информацию в голове. Наше приложение разработано для того, чтобы
                        помочь вам '
                        />
                        <Highlights
                            highlightsType={HighlightsType.greenFill}
                            text='справиться с этой проблемой'
                        />
                    </div>
                </div>
            </div> */}

            {/* Второй экран: Point 02 */}

            {/* <div className={cn(styles.screen, styles.pointSecond)}>
                <div className={styles.screenContainer}>
                    <div className={styles.numbering}>→ POINT 02</div>
                    <div className={styles.textContainer}>
                        <Text textType={TextType.header} text='А что оно делает?' />
                        <Text
                            textType={TextType.bodyParagraph}
                            text='Points автоматически резюмирует ключевые моменты из ваших встреч, облегчая доступ к самой важной информации без необходимости просмотра всей записи встречи.'
                        />
                        <Button
                            buttonType={ButtonType.black}
                            text='Попробовать'
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </div> */}

            {/* Третий экран: Point 03 */}

            {/* <div className={cn(styles.screen, styles.pointThird)}>
                <div className={styles.screenContainer}>
                    <div className={styles.numbering}>→ POINT 03</div>
                    <Text textType={TextType.header} text='Points поможет с:' />
                    <div className={styles.textContainer}>
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
                <div className={styles.figureContainer}>
                    <Figure figureType={FigureType.ARC} width={345} height={172} fill='black' />
                </div>
            </div> */}

            {/* Четвертый экран: Point 04 */}

            {/* <div className={cn(styles.screen, styles.pointFourth)}>
                <div className={styles.screenContainer}>
                    <div className={styles.numbering}>→ POINT 04</div>
                    <Text textType={TextType.header} text='Итоги встречи' />
                    <div className={styles.textContainer}>
                        <Text
                            textType={TextType.bodyParagraph}
                            text='По итогам встречи с Points вы получите информацию
                            о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!'
                        />
                    </div>

                    <CardsWidget />
                </div>
            </div> */}

            <Footer withForm />
        </>
    )
}
