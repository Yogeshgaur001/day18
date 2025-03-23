import './App.css';
//import Alert from './route.js';
import Home from './component/home'
import About from './component/about'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import NavBar from './component/navbar'
//import Page404 from './component/page404';
import User from './component/user'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/Home" element ={<Home/>} />
      <Route path="/About" element={<About/>}/>
     {/* <Route path='/*' element={<Page404/>}/>*/}
     <Route path="/*" element={<Navigate to="/"/>}/>
     <Route path="/User" element={<User/>}/>

      </Routes>
     {/* <Alert/>*/}
      
     {/*<About/>*/}
     </BrowserRouter>
    </div>
  );
}

export default App;
