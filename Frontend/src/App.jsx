
import './css/App.css'
import AppProvider from './context/AppProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Kontakt from './pages/Kontakt/Kontakt'

function App() {
  

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SharedLayout/>}>
              <Route index element={<Home />}></Route>
              {/* Weitere Routen hier zwischen */}
              <Route path='kontakt' element={<Kontakt />}></Route>
              {/* Weitere Routen hier zwischen */}
              <Route path='*' element={<NotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App
