import './App.css';
//import Alert from './route.js';
import Home from './component/home'
import About from './component/about'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/Home" element ={<Home/>} />
      <Route path="/About" element={<About/>}/>
      </Routes>
     {/* <Alert/>*/}
      
     {/*<About/>*/}
     </BrowserRouter>
    </div>
  );
}

export default App;
