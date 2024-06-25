import { Routes,Route, Link, useNavigate} from 'react-router-dom'
import Home from './pages/Home.jsx'
import LoginPage from ".//pages/LoginPage.jsx"
import CreatePost from './pages/CreatePost.jsx'
import { useState } from 'react'
import {signOut} from "firebase/auth"
import { auth } from './firebase-config.js'
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUsername] = useState("");
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate("/login")
    })
  }
  return (
    <>
        
        <nav>
          <Link to="/" element={<Home />}><h1 className="logo">Onlygains</h1></Link>
          <ul >
            <li>
                <Link to='/create' element={<Home/>}>post</Link>
            </li>
            {!isAuth ? <li><Link className="loginBtn" to='/login' element={<LoginPage/>}>sign in</Link></li>: <button className="logoutBtn" onClick={logOut}>log out</button>}
                
            
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home userName={userName}></Home>} />
          <Route path='/create' element={<CreatePost isAuth={isAuth}  />} />
          <Route path='/login' element={<LoginPage  setIsAuth={setIsAuth} setUsername={setUsername}/>} />
        </Routes>
    </>
  )
}

export default App
