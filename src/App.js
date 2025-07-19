import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Login from './Pages/Login'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import Service from './Pages/Services'
import Contact from './Pages/Contact'
import Contractor from './Pages/Contractor'
import ContractorDetails from './Pages/ContractorDetails'
import Booking from './components/Booking'
function App() {
  return (
      <div>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/service' element={<Service />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/contractor' element={<Contractor />} />
                        <Route path='/contractorDetails' element={<ContractorDetails />} />
                        <Route path='/Booking' element={<Booking />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
  );
}

export default App;
