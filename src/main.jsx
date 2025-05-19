import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Activities from './pages/Activities'
import Events from './pages/Events'
import Notices from './pages/Notices'
import PhotoGallery from './pages/PhotoGallery'
import AcademicExcellence from './pages/AcademicExcellence'
import Admission from './pages/Admission'
import AdmissionGuidelines from './pages/AdmissionGuidelines'
import EnquiryForm from './pages/EnquiryForm'
import DirectorsMessage from './pages/DirectorsMessage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'activities',
        element: <Activities />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'notices',
        element: <Notices />,
      },
      {
        path: 'gallery',
        element: <PhotoGallery />,
      },
      {
        path: 'academic-excellence',
        element: <AcademicExcellence />,
      },
      {
        path: 'admission',
        element: <Admission />,
      },
      {
        path: 'admission-guidelines',
        element: <AdmissionGuidelines />,
      },
      {
        path: 'enquiry',
        element: <EnquiryForm />,
      },
      {
        path: 'directors-message',
        element: <DirectorsMessage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
