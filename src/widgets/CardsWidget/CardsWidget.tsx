/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useRef, useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './CardsWidget.module.scss'
import { CARDS_LIST } from './CardsWidget.const'
import { Text, TextType } from '../../shared/ui'

interface CardProps {
    title: string
    description: string
    image: string
    height: number
    width: number
    isWhite: boolean
    transform: string
    index: number
    top?: number
    left?: number
}

// TODO: fix z-index
const DraggableCard: FC<CardProps> = ({
    title,
    description,
    image,
    height,
    width,
    isWhite,
    index,
    transform,
    top: initialTop,
    left: initialLeft,
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    const [zIndex, setZIndex] = useState(0)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging && ref.current) {
                const parentRect = ref.current.parentElement?.getBoundingClientRect()
                if (parentRect) {
                    const left = e.clientX - parentRect.left - offsetX
                    const top = e.clientY - parentRect.top - offsetY

                    const maxLeft = parentRect.width - ref.current.offsetWidth
                    const maxTop = parentRect.height - ref.current.offsetHeight

                    const clampedLeft = Math.min(Math.max(0, left), maxLeft)
                    const clampedTop = Math.min(Math.max(0, top), maxTop)

                    ref.current.style.left = `${clampedLeft}px`
                    ref.current.style.top = `${clampedTop}px`
                }
            }
        }
        const handleMouseUp = () => {
            setIsDragging(false)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging, offsetX, offsetY])

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setZIndex(1)

        const boundingBox = ref.current?.getBoundingClientRect()
        if (boundingBox) {
            setOffsetX(e.clientX - boundingBox.left)
            setOffsetY(e.clientY - boundingBox.top)
        }
    }

    return (
        <div
            ref={ref}
            className={cn(styles.card, isWhite ? styles.white : styles.black)}
            style={{
                position: 'absolute',
                left: `${initialLeft}%`,
                top: `${initialTop}%`,
                width: `${width}px`,
                height: `${height}px`,
                transform,
                zIndex,
            }}
            onMouseDown={handleMouseDown}
        >
            <Text textType={TextType.captions} text={`ИТОГ 0${index}`} />

            <img className={styles.image} style={{ height, width }} src={image} alt='' />

            <div className={styles.textContainer}>
                <Text textType={TextType.subhead} text={title} />
                <Text textType={TextType.additionalText} text={description} />
            </div>
        </div>
    )
}

export const CardsWidget: FC = () => {
    return (
        <div className={styles.root}>
            {CARDS_LIST.map((card, index) => (
                <DraggableCard key={index} index={index} {...card} />
            ))}
        </div>
    )
}
