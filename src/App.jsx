import { BrowserRouter } from "react-router-dom";
import { Login, Signup, StarsCanvas } from "./components";
import Weather from "./components/Weather";

const App = () => {
  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-purple-300 h-screen'>
        <div className='relative z-0'>
          <Weather />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
