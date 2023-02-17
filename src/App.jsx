import LadingPage from './components/LadingPage'
import Home from './components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './styles/global.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={ <Home />} />
          <Route path='/' element={ <LadingPage/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App