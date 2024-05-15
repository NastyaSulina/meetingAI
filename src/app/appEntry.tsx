import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import Routing from './appRouter'
import { store } from './appStore'
import './styles/globalStyles.scss'
import { AnimationProvider } from './providers/AnimationProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AnimationProvider>
                <Routing />
            </AnimationProvider>
        </Provider>
    </React.StrictMode>,
)

if (import.meta.webpackHot) {
    import.meta.webpackHot.accept()
}
