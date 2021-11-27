import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Labs from "./components/Labs";
import Home from "./components/Home"


function App() {
 return (
        <Router >
          
          <div>
          <Routes>
             
             <Route path="/" caseSensitive={false} element={ <Home />} />
             </Routes>
       
           
           <Routes>
             
              <Route path="/labs" caseSensitive={false} element={ <Labs />} />
              </Routes>
        
          </div>
          </Router>
   
)
}

export default App;
