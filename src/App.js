import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Allproduct from './compo/Allproduct';
import Action from './compo/Action';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-icons'
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return(
    <div className='App'>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
      <Route path="/" element={<Allproduct/>}/>
      <Route path="/action" element={<Action/>}/>
      <Route path="/action/:id/:isView" element={<Action/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
