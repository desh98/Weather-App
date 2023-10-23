import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, StarsCanvas } from "./components";
import Weather from "./components/Weather";

const App = () => {
  
  return (
    <BrowserRouter>
      <div className='relative z-0 h-screen'>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
          
          <StarsCanvas />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
