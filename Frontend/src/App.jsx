
import './css/App.css'
import { PlayerProvider } from './context/PlayerContext'; 
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
import Login from './pages/Login/Login'

function App() {

  return (
    <>
      <PlayerProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} /> 
            <Route path='/' element={<SharedLayout/>}>
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
      </PlayerProvider>
    </>
  )
}

export default App
