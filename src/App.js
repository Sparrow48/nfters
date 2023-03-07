import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './routers/Navigation';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={'/'} element={<Navigation />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
