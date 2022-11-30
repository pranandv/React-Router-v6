import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

function App() {
  return (
    <div >
      <ul>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </ul>

    </div>
  );
}

export default App;
