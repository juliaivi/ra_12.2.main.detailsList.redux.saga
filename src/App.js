import ServiceLists from './components/ServiceLists';
import ServiceDetails from './components/ServiceDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ServiceLists />} />
          <Route path='/:id/details' element={<ServiceDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
