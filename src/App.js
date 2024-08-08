import './App.css';
import CreateEmployee from './Pages/CreateEmployee/CreateEmployee';
import HomePage from './Pages/HomePage/HomePage';
import ReadEmployee from './Pages/ReadEmployee/ReadEmployee';
import UpdateEmployee from './Pages/UpdateEmployee/UpdateEmployee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/employees' element={<CreateEmployee />} />
          <Route exact path='/employees/:id' element={<ReadEmployee />} />
          <Route exact path='/employee/:id' element={<UpdateEmployee />} />
        </Routes>
      </Router>



    </div>
  );
}

export default App;
