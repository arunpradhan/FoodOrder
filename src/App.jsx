import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Book from './pages/Book'
import Menu from './pages/menu'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/book-order' element={<Book/>} />
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
