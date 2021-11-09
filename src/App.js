import './App.css';
import Main from './Main';
import Resume from './Resume';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="body-container">
      <Navbar />
      <Routes>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/" exact element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
