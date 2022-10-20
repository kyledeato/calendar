import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Login from './views/Login';
import Register from './views/Register';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/login" element ={<Login/>}> </Route>
          <Route path="/register" element ={<Register/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
