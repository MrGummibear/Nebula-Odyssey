
import './css/App.css'
import AppProvider from './context/AppProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import Overview from './pages/Overview/Overview'
import Spacemap from './pages/Spacemap/Spacemap'
import Buildings from './pages/Buildings/Buildings'
import Research from './pages/Research/Research'
import Shipyard from './pages/Shipyard/Shipyard'
import Defense from './pages/Defense/Defense'
import Armada from './pages/Armada/Armada'
import NotFound from './pages/NotFound/NotFound'

function App() {
  

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SharedLayout/>}>
              <Route index element={<Overview />}></Route>
              {/* Weitere Routen hier zwischen */}
              <Route path='overview' element={<Overview />} />
              <Route path='spacemap' element={<Spacemap />} />
              <Route path='buildings' element={<Buildings />} />
              <Route path='research' element={<Research />} />
              <Route path='shipyard' element={<Shipyard />} />
              <Route path='defense' element={<Defense />} />
              <Route path='armada' element={<Armada />} />
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
