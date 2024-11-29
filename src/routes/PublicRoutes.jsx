import React from 'react'
import BookingsProvider from '../contexts/BookingsContext'
import Layout from '../layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Hotels from '../pages/Hotels/Hotels'
import Details from '../pages/Details/Details'
import Bookings from '../pages/Bookings/Bookings'
import NotFound from '../pages/NotFound/NotFound'

const PublicRoutes = () => {
    return (
        <div>
            <BookingsProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hotels" element={<Hotels />} />
                        <Route path="/hotels/:id" element={<Details />} />
                        <Route path="/bookings" element={<Bookings />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BookingsProvider>
        </div>
    )
}

export default PublicRoutes