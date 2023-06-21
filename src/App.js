import './App.scss';
import { Routes , Route } from "react-router-dom"
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';

import "./style/screen1.scss"
import "./style/screen2.scss"
import "./style/screen3.scss"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/Assignment1' element={<Screen1/>} />
        <Route path='/screen2' element={<Screen2/> } />
        <Route path='/screen3' element={<Screen3/> } />
      </Routes>
    </div>
  );
}

export default App;
