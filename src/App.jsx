import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx';
import '@fontsource/public-sans';



const router = createBrowserRouter([{ element: <HomePage />, path: '/' },
{ element: <Signup />, path: '/signup' },
{ element: <Login />, path: '/login' }]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App