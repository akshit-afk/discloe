
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import './App.css';
import Detail from './Components/detail';
import Header from './Components/header';
import Home from './Components/home';
import Login from './Components/login';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
     <Routes>
       <Route exact path = "/" element={<Login/>}></Route>
       <Route  path = "/home" element = {<Home />}></Route>
       <Route path = "/detail/:id" element= {<Detail />}></Route>
     </Routes>

    </Router>
    </div>
  );
}

export default App;
