import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Form/Home';
import Login from './Form/Login';
import Register from './Form/Register';
import DeleteUser from './Form/DeleteUser';
import Update from './Form/Update';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/delete' element={<DeleteUser/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
