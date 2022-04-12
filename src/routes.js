import React from 'react'
import SignIn from './Components/SignIn'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from './Components/ForgotPassword';
import SignUp from './Components/SignUp';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    )
}

