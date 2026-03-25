import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ContextProvider from './components/Context/setContext.jsx'
import DashboardLayout from './components/Dashboard/DashboardLayout.jsx'
import NewRegistrationLayout from './components/Regitration/newRegistration/NewRegistrationLayout.jsx'
import EditRegistrationLayout from './components/Regitration/editRegistration/EditRegistrationLayout.jsx'
import "./assets/css/style.css"
import AllRegistration from './components/Regitration/AllRegistation.jsx'
import ProfileLayout from './components/User/ProfileLayout.jsx'
import SignupForm from './components/Auth/Signup/SignupForm.jsx'
import AuthLayout from './components/Auth/AuthLayout.jsx'
import LoginForm from './components/Auth/Login/LoginForm.jsx'
import NotFound from './components/NotFound.jsx'

export const router = createBrowserRouter([
{
  
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <DashboardLayout/>,
      },
      {
        path: "/registrations/newregistration",
        element: <NewRegistrationLayout/>,
      }, 
      {
        path: "/registrations/editregistration",
        element: <EditRegistrationLayout/>,
      }, 
      {
        path: "/registrations/allregistrations",
        element: <AllRegistration/>,
      }, 
      {
        path: "/user/profile",
        element: <ProfileLayout/>,
      },
    ]
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signup",
        element: <SignupForm />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
    ]
  },
  // {
  //   path: "/*",
  //   element: <NotFound/>

  // }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
