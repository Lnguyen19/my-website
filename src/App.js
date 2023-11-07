import logo from './logo.svg';
import  NavBar from './navBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main'
import Arduino_alarm from "./arduino_alarm";
import Shop from "./shop";
import Media from "./media";
import Avatar from "./avatar";
import Spam from "./spam";
import Camera from "./camera";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path = "alarm" element = {<Arduino_alarm/>}/>
           <Route path = "shop" element = {<Shop/>}/>
           <Route path = "media" element = {<Media/>}/>
           <Route path = "avatar" element = {<Avatar/>}/>
           <Route path = "spam" element = {<Spam/>}/>
           <Route path = "camera" element = {<Camera/>}/>

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
