import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

import Login from '../pages/Login'
import Register from '../pages/Register'

import Home from '../pages/Home'

import Ratings from '../pages/Ratings'
import Rates from '../pages/Rates'

import NotFound from '../pages/NotFound' 

function Router() {

    const { user, userLoaded } = useAuthContext();

    if (!userLoaded) {
        return <div>Loading...</div>; // or a spinner
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />

                <Route path="/ratings" element={user ? <Ratings /> : <Navigate to="/" />} />
                <Route path="/rates" element={user ? <Rates /> : <Navigate to="/" />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
