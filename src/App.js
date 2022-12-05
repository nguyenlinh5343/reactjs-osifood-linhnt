import './App.css';
import './pages/Index.js';
import { Routes, Route, BrowserRouter , Link } from 'react-router-dom';
import Layout from './component/Layout.js';
import  Login from './pages/Login.js';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path=''  element={<Layout/>}>
            <Route path='/detail'  element={<Layout/>}/>
            <Route path='/'  element={<Layout/>}/>

          </Route>
         
          <Route path='/login'  element={<Login/>}/>
        
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
