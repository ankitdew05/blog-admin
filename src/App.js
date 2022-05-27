
import './App.css';
import Addblog from './Components/Addblog';
import {Route,Routes,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Addblog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;