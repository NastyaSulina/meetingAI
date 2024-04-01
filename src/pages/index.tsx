import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage } from './LandingPage'
import SummaryPage from './SummaryPage'
import ErrorPage from './ErrorPage'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/summary/:id' element={<SummaryPage />} />
                <Route path='/error' element={<ErrorPage />} />
                <Route path='*' element={<Navigate to='/error' replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
