import { ReactNode, useEffect } from 'react'
// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'

interface AnimationProviderProps {
    children: ReactNode
}

/*
    Обертка для инициализации AOS: Animate On Scroll Library
*/

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])

    return children
}
