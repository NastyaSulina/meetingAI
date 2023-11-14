import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import SummaryPage from './SummaryPage'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='test' element={<SummaryPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
