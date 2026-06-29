import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VisionPage from './pages/VisionPage'
import MissionPage from './pages/MissionPage'
import StrategicValuesPage from './pages/StrategicValuesPage'
import CoreValuesPage from './pages/CoreValuesPage'
import ManagementSystemsPage from './pages/ManagementSystemsPage'
import ContactPage from './pages/ContactPage'
import TendersPage from './pages/TendersPage'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0a1a0c' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<VisionPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/strategic-values" element={<StrategicValuesPage />} />
            <Route path="/core-values" element={<CoreValuesPage />} />
            <Route path="/management-systems" element={<ManagementSystemsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tenders" element={<TendersPage />} />
            <Route path="/tenders/:tab" element={<TendersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
