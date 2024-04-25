import React from 'react'
import cn from 'classnames'
import { Highlights, HighlightsType, Text, TextType, Button, ButtonType, Eye } from '@/shared/ui'
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
                    <Text
                        text='Приложение для резюмирования Zoom-встреч'
                        textType={TextType.additionalText}
                    />
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
                <div className={cn(styles.pointContainer, styles.pointFirst)}>
                    <div className={styles.numbering}>→ POINT 01</div>
                    <div className={styles.text}>
                        <Text
                            textType={TextType.default}
                            text='В сфере IT, удалённом обучении и бизнесе стало очень '
                        >
                            <>
                                В сфере IT, удалённом обучении и бизнесе стало очень{' '}
                                <Highlights
                                    isTextColorLight
                                    highlightsType={HighlightsType.stroke}
                                    text='много онлайн-встреч'
                                />
                                <br />В силу их большого количества и возможных пересечений,
                                становится сложно удерживать всю информацию в голове. Наше
                                приложение разработано для того, чтобы помочь вам{' '}
                                <Highlights
                                    highlightsType={HighlightsType.greenFill}
                                    text='справиться с этой проблемой'
                                />
                            </>
                        </Text>
                    </div>
                </div>
            </div>

            {/* Второй экран: Point 02 */}

            <div id='pointSecond' className={styles.screen}>
                <div className={cn(styles.pointContainer, styles.pointSecond)}>
                    <div className={styles.numbering}>→ POINT 02</div>
                    <div className={styles.text}>
                        <Text textType={TextType.header} text='А что оно делает?' />
                        <Text textType={TextType.bodyParagraph}>
                            <>
                                <b>Points </b>автоматически резюмирует ключевые моменты из ваших
                                встреч, облегчая доступ к самой важной информации без необходимости
                                просмотра всей записи встречи.
                            </>
                        </Text>
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
                    <Text textType={TextType.header} text='Points поможет с:' />
                    <div className={styles.text}>
                        <Text textType={TextType.default}>
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
                        </Text>
                    </div>
                </div>
            </div>

            {/* Четвертый экран: Point 04 */}

            <div id='pointFourth' className={styles.screen}>
                <div className={cn(styles.pointContainer, styles.pointFourth)}>
                    <div className={styles.numbering}>→ POINT 04</div>
                    <Text textType={TextType.header} text='Итоги встречи' />
                    <div className={styles.text}>
                        <Text
                            textType={TextType.bodyParagraph}
                            text='По итогам встречи с Points вы получите информацию
                            о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!'
                        />
                    </div>

                    <CardsWidget />
                </div>
            </div>

            <Footer withForm />
        </div>
    )
}
