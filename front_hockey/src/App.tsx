import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthFormLogin from './components/authForm/login.tsx'
import AuthFormRegistration from './components/authForm/registr.tsx'
import Footer from './components/footer/footer.tsx'
import Header from './components/header/header.tsx'
import HomePage from './components/home/home.tsx'
import RaitingTable from './components/rating/rating.tsx'
import { AuthProvider } from './services/authContext.tsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <AuthProvider>
    <Header/>
      <Routes>
        
        <Route path="/login" element={<AuthFormLogin/>} />
        <Route path="/registration" element={<AuthFormRegistration/>} />
        <Route path="/rating" element={<RaitingTable/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    <Footer/>
    </AuthProvider>
    </BrowserRouter>
    
    </>
  )
}

export default App
