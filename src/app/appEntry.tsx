import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import Routing from './appRouter'
import { store } from './appStore'
import './globalStyles.scss'
import 'video-react/dist/video-react.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Routing />
        </Provider>
    </React.StrictMode>,
)

if (import.meta.webpackHot) {
    import.meta.webpackHot.accept()
}
