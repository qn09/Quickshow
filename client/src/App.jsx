import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Favorite from './pages/Favorite'
import MyBookings from './pages/MyBookings'
import MovieDetails from './pages/MovieDetails'
import Movies from './pages/Movies'
import SeatLayout from './pages/SeatLayout'
import Home from './pages/Home'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast' 
const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith( '/admin');
  
  return (
        <>
          <Toaster/>
          {!isAdminRoute && <Navbar/>}
            <Routes>
                <Route path='/' element={<Home/> }   ></Route>
                <Route path = '/movies' element={<Movies/>}></Route>
                <Route path = '/movies/:id' element={<MovieDetails/>}></Route>
                <Route path = '/movies/:id:/:date' element={<SeatLayout/>}></Route>
                <Route path = 'my-bookings' element ={<MyBookings/>}></Route>
                <Route path = 'favourite' element ={<Favorite/>}></Route>
            </Routes>
          {!isAdminRoute && <Footer/>}
        </>
  )
}

export default App