import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  BrowserRouter as Router, Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Labs from "./components/Labs";
import Home from "./components/Home"
import DeviceDashBoard from './components/DeviceDashBoard';
import Sensor from './components/Sensor';
import Devicedb from './components/Devicedb';
import StatisticData from './components/StatisticData';

function App() {
 return (
        // <Router >
        //   <Home />
        //   <div>
        //   <Routes>
             
        //      <Route path="/"  />
        //      </Routes>
       
           
        //    <Routes>
             
        //       <Route path="/labs" caseSensitive={false} element={ <Labs />} />
        //       </Routes>
        //       <Routes>
             
        //      <Route path="/devices" caseSensitive={false} element={ <DeviceDashBoard />} />
        //      </Routes>
            

        //      <Routes>
        //      <Route path="/sensors" caseSensitive={false} element={ <Sensor />} />
        //      </Routes>
        //      <Routes>
        //      <Route path="/devicedb" caseSensitive={false} element={ <Devicedb />}  />
        //      </Routes>

        //      <Routes>
        //      <Route path="/statistic" caseSensitive={false} element={ <StatisticData />}  />
        //      </Routes>

        //   </div>
        //   </Router>
        <div>
          <StatisticData/>
          {/* <Devicedb /> */}

        </div>
   
)
}

export default App;
