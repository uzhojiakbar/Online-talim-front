import React, { Profiler } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../register/register'
import Login from '../login/Login'
import NotFound from '../componets/NootFound'
import Profile from '../componets/profile/Profile'
import { getCookie } from '../Hooks/getCooce'
import Lesson from '../componets/profile/lessons/lesson/lesson'
function RootControl() {
    const token = getCookie('token')
    console.log(token)
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={token ? <Navigate to={'/profile'} /> : <Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={token ? <Profile /> : <Navigate to={"/"}/>} />
                <Route path='/profile/lesson' element={<Lesson />} />
                <Route path='/profile/lesson/:lessonId' element={<Lesson />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootControl
