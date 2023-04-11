import './App.css';
import Hello from './Hello';
import Time from './Time';
import Name from './Name';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Hello />} />
              <Route path="/time" element={<Time />} />
              <Route path="/name" element={<Name />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
