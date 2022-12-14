import './App.css';
import './pages/Index.js';
import { Routes, Route, BrowserRouter , Link } from 'react-router-dom';
import Layout from './component/Layout.js';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path='/'  element={<Layout/>}>
            <Route path='/detail'  element={<Layout/>}/>
          </Route>
          {/* <Route path='/login'  element={<Login/>}/> */}
        
      </Routes>
    </BrowserRouter></Provider>
  );
}

export default App;
