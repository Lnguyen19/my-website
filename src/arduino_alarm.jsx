import NavBar from "./navBar";
import "./arduino_alarm.css";
import timer from "./timer.mp4";
import alarm from "./alarm.jpg"
import arduino_test from "./arduino_test.mp4";
const Arduino_alarm = ()=>{
return(<>
	<NavBar/>

<div id = "time" class = "container-fluid">
<h2 style = {{fontWeight:"bold"}}> Arduino Alarm</h2>
<img  id = "alarm_photo"src = {alarm}/>
<br/>
<div id = "alarm_info">

<p>Technologies used: Arduino IDE, Arduino Cloud, C++</p>
<p>Hardware used: Arduino Nano 33 Iot, Breadboard, wires, breadboard</p>
<p>Project type: School Final Project</p>
<p> Organization: California State University San Marcos</p>
<p>Class: CS 488 Introduction To IOT</p>
<p>Description: An Alarm made with IOT Technologies that allows the user to control using a user interface</p>
</div>
<br/>
<div id = "timer">
<div>

</div>
<video id = "vid"  controls src = {timer} >  </video>
<p> This video was a demonstration of the timer function that I have implemented in my alarm.
 <p>I entered an interger value within the Arduino cloud UI, then an interger value will appear
 <p>at the top of the current displayed time and that interger value wil start decremeting. 
 <p>Once that number reaches 1, the buzzer will start to ring and notify the user. </p>
 </p>
 </p>

</p>

</div>

<div id = "full_test">
<video id = "test"  controls src = {arduino_test} >  </video>
<p>In this part of the demonstration, I have  tested the primary alarm function, whenever I enter
<p>an an interger value inside the time input inside the Arduino Cloud UI. Once the elapsed time on the
<p>LCD screen matches the values on the Arduino Cloud UI, the buzzer will start ringing. In addition, 
<p>another feature that I have implemented was a slider that can change the alarm sound, the user 
<p>can slide and customize their own alarm sound.
</p>
</p>
</p>
</p>
</p>
</div>


</div>



	</>)
}
export default Arduino_alarm;