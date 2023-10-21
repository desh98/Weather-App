import { BrowserRouter } from "react-router-dom";

import { Login, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary h-screen'>
        <div className='relative z-0'>
          <Login />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
