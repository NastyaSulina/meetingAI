import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage/ui'
import SummaryPage from '@/pages/SummaryPage/ui'
import ErrorPage from '@/pages/ErrorPage/ui'

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
