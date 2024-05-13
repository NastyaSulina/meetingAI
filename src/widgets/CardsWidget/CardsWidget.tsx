/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useRef, useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './CardsWidget.module.scss'
import { CARDS_LIST } from './CardsWidget.const'

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
    right?: number
    originalZIndex: number
}

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
    right: initialRight,
    originalZIndex,
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    const [currentZIndex, setCurrentZIndex] = useState(originalZIndex)

    useEffect(() => {
        const handleTouchMove = (e: TouchEvent) => {
            if (isDragging) {
                e.preventDefault()
            }
        }

        document.addEventListener('touchmove', handleTouchMove, { passive: false })

        return () => {
            document.removeEventListener('touchmove', handleTouchMove)
        }
    }, [isDragging])

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

        const handleTouchMove = (e: TouchEvent) => {
            if (isDragging && ref.current) {
                const parentRect = ref.current.parentElement?.getBoundingClientRect()
                if (parentRect) {
                    const left = e.touches[0].clientX - parentRect.left - offsetX
                    const top = e.touches[0].clientY - parentRect.top - offsetY

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

        const handleTouchEnd = () => {
            setIsDragging(false)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('touchmove', handleTouchMove, { passive: true })
        document.addEventListener('touchend', handleTouchEnd)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleTouchEnd)
        }
    }, [isDragging, offsetX, offsetY])

    const handleMouseDown = (
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    ) => {
        setIsDragging(true)

        const boundingBox = ref.current?.getBoundingClientRect()
        if (boundingBox) {
            const event = e as React.MouseEvent<HTMLDivElement>
            const touchEvent = e as React.TouchEvent<HTMLDivElement>

            const clientX = event.clientX || touchEvent.touches[0].clientX
            const clientY = event.clientY || touchEvent.touches[0].clientY

            setOffsetX(clientX - boundingBox.left)
            setOffsetY(clientY - boundingBox.top)
        }

        const cards = document.getElementsByClassName(styles.card)

        let maxIndex = 0
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i] as HTMLDivElement
            if (card !== ref.current) {
                maxIndex = Math.max(+card.style.zIndex, maxIndex)
            }
        }

        ref.current.style.zIndex = (maxIndex + 1).toString()
        setCurrentZIndex(maxIndex + 1)
    }

    return (
        <div
            ref={ref}
            className={cn(styles.card, isWhite ? styles.white : styles.black)}
            style={{
                position: 'absolute',
                [initialLeft ? 'left' : 'right']: `${initialLeft || initialRight}%`,
                top: `${initialTop}%`,
                width: `${width}px`,
                height: `${height}px`,
                transform,
                zIndex: currentZIndex,
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
        >
            <span className={styles.captions}>{`ИТОГ 0${index}`}</span>

            <img className={styles.image} style={{ height, width }} src={image} alt='' />

            <div className={styles.textContainer}>
                <span className={styles.subhead}>{title}</span>
                <span className={styles.additionalText}>{description}</span>
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
