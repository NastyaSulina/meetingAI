import React, { FC, useState, useEffect, useRef } from 'react'

export const Eye: FC<{ scale?: number }> = ({ scale = 1 }) => {
    const [leftEyePosition, setLeftEyePosition] = useState({ x: 12, y: 15 })
    const [rightEyePosition, setRightEyePosition] = useState({ x: 30, y: 15 })

    const svgRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (svgRef.current) {
                const svgElement = svgRef.current
                const boundingRect = svgElement.getBoundingClientRect()
                const offsetX = e.clientX - boundingRect.left
                const offsetY = e.clientY - boundingRect.top

                // Ограничиваем движение зрачков внутри глазика
                const clamp = (value: number, min: number, max: number) => {
                    return Math.min(Math.max(value, min), max)
                }

                const eyeCenterX = 7.5
                const eyeCenterY = 15
                const eyeRadius = 4.2
                const eyeDistance = 18

                // Вычисляем позиции зрачков
                const clampedX = clamp(offsetX, eyeCenterX - eyeRadius, eyeCenterX + eyeRadius)
                const clampedY = clamp(offsetY, eyeCenterY - eyeRadius, eyeCenterY + eyeRadius)

                setLeftEyePosition({ x: clampedX, y: clampedY })
                setRightEyePosition({ x: clampedX + eyeDistance, y: clampedY })
            }
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    return (
        <svg
            ref={svgRef}
            width='33'
            height='30'
            viewBox='0 0 33 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ transform: `scale(${scale})` }}
        >
            <path
                d='M14.5 15C14.5 19.0813 13.6718 22.7516 12.3561 25.383C11.0254 28.0443 9.27965 29.5 7.5 29.5C5.72035 29.5 3.97457 28.0443 2.64391 25.383C1.32821 22.7516 0.5 19.0813 0.5 15C0.5 10.9187 1.32821 7.24841 2.64391 4.617C3.97457 1.95569 5.72035 0.5 7.5 0.5C9.27965 0.5 11.0254 1.95569 12.3561 4.617C13.6718 7.24841 14.5 10.9187 14.5 15Z'
                stroke='#111111'
            />
            <path
                d='M32.5 15C32.5 19.0813 31.6718 22.7516 30.3561 25.383C29.0254 28.0443 27.2797 29.5 25.5 29.5C23.7203 29.5 21.9746 28.0443 20.6439 25.383C19.3282 22.7516 18.5 19.0813 18.5 15C18.5 10.9187 19.3282 7.24841 20.6439 4.617C21.9746 1.95569 23.7203 0.5 25.5 0.5C27.2797 0.5 29.0254 1.95569 30.3561 4.617C31.6718 7.24841 32.5 10.9187 32.5 15Z'
                stroke='#111111'
            />
            <circle
                cx={leftEyePosition.x}
                cy={leftEyePosition.y}
                r='3'
                fill='#111111'
                style={{ transition: '0.3s ease-out' }}
            />
            <circle
                cx={rightEyePosition.x}
                cy={rightEyePosition.y}
                r='3'
                fill='#111111'
                style={{ transition: '0.3s ease-out' }}
            />
        </svg>
    )
}
