import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import Books from './components/Books'
import SingleBook from './components/SingleBook'
import Navigation from './components/Navigations'
import bookLogo from './assets/books.png'


function App() {
  const [token, setToken] = useState(null)

  return (
    <Router>
      <img id='logo-image' src={bookLogo}/> 
      <h1>Library App</h1>
      <Navigation token={token} setToken={setToken} />
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/account" element={<Account token={token} />} />
        <Route path="/books" element={<Books token={token} />} />
        <Route path="/books/:id" element={<SingleBook token={token} />} />
      </Routes>
    </Router>
  )
}
export default App
