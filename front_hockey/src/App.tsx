import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthFormLogin from './components/authForm/login.tsx'
import AuthFormRegistration from './components/authForm/registr.tsx'
import Footer from './components/footer/footer.tsx'
import Header from './components/header/header.tsx'
import HomePage from './components/home/home.tsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthFormLogin/>} />
        <Route path="/registration" element={<AuthFormRegistration/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
