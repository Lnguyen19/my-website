import logo from './logo.svg';
import  NavBar from './navBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main'
import Arduino_alarm from "./arduino_alarm";
import Shop from "./shop";
import Media from "./media";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path = "alarm" element = {<Arduino_alarm/>}/>
           <Route path = "shop" element = {<Shop/>}/>
           <Route path = "media" element = {<Media/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
