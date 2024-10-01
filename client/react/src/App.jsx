import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAppointment from "./pages/MyAppointment";
import Profile from "./pages/Profile";
export default function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path= "/doctors" element ={<Doctors/>}/>
        <Route path="/doctors/:speciality" element={<Doctors/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/my-profile' element={<Profile/>}/>
        <Route path="/appointment" element={<MyAppointment/>}/>
        <Route path="/appointment/:docId" element={<MyAppointment/>}/>
      </Routes>
    </div>
  )
}