import {BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import NavBar from './components/pages/NavBar';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import Home from './components/Home';
import './App.css';


function App() {
  return (
    <>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
 
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path='/home' element={<Home />} />
    <Route path='/about' element ={ < About />} />
    <Route path='/features' element={<Features />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element ={<Signup />} />
    


    </Routes>
   

    
    
    </BrowserRouter>
    



   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
   
    </>
  );
}


export default App;
