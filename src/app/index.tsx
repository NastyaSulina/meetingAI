import React from 'react'
import './globalStyles.scss'

interface AppProps {
    num: number
}

const App = ({ num }: AppProps) => {
    return <h1>Total Number: {num}</h1>
}

export default App
