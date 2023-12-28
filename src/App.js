import React, { useContext,  } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import List from './components/pages/list/List'
import Hotel from './components/pages/hotel/Hotel'
import { SearchContextProvider } from './context/SearchContext'
import { AuthContextProvider } from './context/AuthContext'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import { DarkModeContext } from "./context/DarkModeContext";

const App = () => {

  const { darkMode }= useContext(DarkModeContext);
  return (
    <>
    <div className= { darkMode ? " app dark " : " app" }>
    <AuthContextProvider>
    <SearchContextProvider>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/hotels" element={<List />} />
    <Route path="/hotels/:id" element={<Hotel />} />
    </Routes>
    </SearchContextProvider>
    </AuthContextProvider>
    </div>
    </>
  )
}

export default App;