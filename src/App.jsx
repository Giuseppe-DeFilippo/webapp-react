import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayoutComponent from './components/DefaultLayoutComponent'
import { GlobalProvider } from './GlobalContext/GlobalContext'
import MoviesComponent from './components/MoviesComponent'
import SingoloFilm from './pages/SingoloFilm'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayoutComponent />}>
            <Route path="/" element={<MoviesComponent />} />
            <Route path="/pag2/:id" element={<SingoloFilm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App
