import './App.css'
import Home from './routes/Home'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Profile from './routes/Profile'
import Library from './routes/Library'
import Study from './routes/Study'
import SearchResults from './routes/SearchResults'
import Create from './routes/Create'
import Edit from './routes/Edit'
import NotFound from './routes/404'
import Navbar from './components/NavBar'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
  <BrowserRouter>
  <div className = 'bg-primary body-wrapper'>
  <Navbar />

  <Link to ="/">Home |</Link>
  <Link to ="/Login"> Login |</Link>
  <Link to ="/Signup"> Signup |</Link>
  <Link to ="/Profile"> Profile |</Link>
  <Link to ="/Library"> Library |</Link>
  <Link to ="/Study"> Study |</Link>
  <Link to ="/Results"> SearchResults |</Link>
  <Link to ="/Create"> Create |</Link>
  <Link to ="/Edit"> Edit |</Link> 
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Library" element={<Library />} />
      <Route path="/Study" element={<Study />} />
      <Route path="/Results" element={<SearchResults />} />
      <Route path="/Create" element={<Create />}/>
      <Route path="/Edit" element={<Edit />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
