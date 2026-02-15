import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Book from './pages/Book'
import Menu from './pages/menu'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Cart from './pages/Cart'

function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <main className="main-content">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/book-order' element={<Book/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

// This is exactly right because:
// Only one <main> → HTML spec compliant
// <Navigation> is outside <main> → correct
// <Footer> is outside <main> → correct
// Routed page content lives inside <main> → best practice
// Each page (Home, About, etc.) can now safely use <section> → perfect

// This Is the BEST Placement for <main>
// -Semantic Meaning
// --<main> = primary content of the document
// --Navigation & footer are not primary content
// --Route changes = content changes → wrapped by <main>
// -Accessibility Win
// --Screen readers can jump directly to <main>
// --Users with assistive tech skip nav/footer easily