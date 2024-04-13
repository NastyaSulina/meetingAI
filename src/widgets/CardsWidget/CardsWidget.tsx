// @ts-nocheck
import React, { FC, useRef, useState, useEffect } from 'react'
import { useDrag, useDrop, DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styles from './CardsWidget.module.scss'
import cn from 'classnames'
import { CARDS_LIST } from './CardsWidget.const'
import { Text, TextType } from '../../shared/components'

interface CardProps {
    title: string
    description: string
    image: string
    height: number
    width: number
    isWhite: boolean
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
}

const DraggableCard: FC<CardProps> = ({
    title,
    description,
    image,
    height,
    width,
    isWhite,
    index,
    moveCard,
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [left, setLeft] = useState(0)
    const [top, setTop] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    const [, drag] = useDrag({
        type: 'CARD',
        item: { type: 'CARD', index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, drop] = useDrop({
        accept: 'CARD',
        hover: (item: any, monitor) => {
            if (!ref.current || !monitor.isDragging()) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    drag(drop(ref))

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging && ref.current) {
                setLeft(e.clientX - ref.current.getBoundingClientRect().width / 2)
                setTop(e.clientY - ref.current.getBoundingClientRect().height / 2)
            }
        }

        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [isDragging])

    return (
        <div
            ref={ref}
            className={cn(styles.card, isWhite ? styles.white : styles.black)}
            style={{
                position: 'absolute',
                left: `${left}px`,
                top: `${top}px`,
            }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
        >
            <Text textType={TextType.captions} text={`ИТОГ 0${index + 1}`} />

            <img
                className={styles.image}
                style={{ height: height, width: width }}
                src={image}
                alt=''
            />

            <div className={styles.textContainer}>
                <Text textType={TextType.subhead} text={title} />
                <Text textType={TextType.additionalText} text={description} />
            </div>
        </div>
    )
}

export const CardsWidget: FC = () => {
    const [cards, setCards] = useState(CARDS_LIST)

    const moveCard = (dragIndex: number, hoverIndex: number) => {
        const dragCard = cards[dragIndex]
        const updatedCards = [...cards]
        updatedCards.splice(dragIndex, 1)
        updatedCards.splice(hoverIndex, 0, dragCard)
        setCards(updatedCards)
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.root}>
                {cards.map((card, index) => (
                    <DraggableCard key={index} index={index} moveCard={moveCard} {...card} />
                ))}
            </div>
        </DndProvider>
    )
}

// import React, { FC } from 'react'
// import styles from './CardsWidget.module.scss'
// import cn from 'classnames'
// import { CARDS_LIST } from './CardsWidget.const'
// import { Text, TextType } from '../../shared/components'

// export const CardsWidget: FC = () => {
//     return (
//         <div className={styles.root}>
//             {CARDS_LIST.map(({ title, description, image, height, width, isWhite }, key) => (
//                 <div className={cn(styles.card, isWhite ? styles.white : styles.black)} key={key}>
//                     <Text textType={TextType.captions} text={`ИТОГ 0${key + 1}`} />

//                     <img
//                         className={styles.image}
//                         style={{ height: height, width: width }}
//                         src={image}
//                         alt=''
//                     />

//                     <div className={styles.textContainer}>
//                         <Text textType={TextType.subhead} text={title} />

//                         <Text textType={TextType.additionalText} text={description} />
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }
