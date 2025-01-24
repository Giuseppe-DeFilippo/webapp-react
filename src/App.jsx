import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/headerComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayoutComponent from './components/DefaultLayoutComponent'
import { GlobalProvider } from './GlobalContext/GlobalContext'
import MainComponent from './components/mainComponent'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayoutComponent />}>
            <Route path="/" element={<MainComponent />} />
            <Route path="/pag2" element={<h1>Seconda Pagina</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App
