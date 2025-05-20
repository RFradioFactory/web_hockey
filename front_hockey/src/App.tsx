import './App.css'
import AuthFormLogin from './components/authForm/login.tsx'
import AuthFormRegistration from './components/authForm/registr.tsx'
import Footer from './components/footer/footer.tsx'
import Header from './components/header/header.tsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <AuthFormLogin/>
      <AuthFormRegistration/>
      <Footer/>
    </>
  )
}

export default App
