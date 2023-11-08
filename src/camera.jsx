import "./camera.css";
import Return from "./return";
import camera from "./camera.JPG";
import cam from "./yolo_traffic.mp4";
const Camera = ()=>{

return(<>
<Return/>

<div id = "shopping">
<h2>Traffic Camera</h2>
<img id = "boat" src = {camera}/>
<div id = "shop_info"> 
<p>Technologies used: Python, OpenCV, NumPy,YOLOv4</p>
<p>Hardware used: N/A</p>
<p>Project type: Personal Project</p>
<p>Description: The Smart Traffic Surveillance System is a cutting-edge project that utilizes the power of computer vision and deep learning to revolutionize real-time traffic monitoring. Developed using Python with OpenCV and YOLOv4-tiny, the system dynamically analyzes video feeds, focusing on the detection and tracking of vehicles. It goes beyond traditional surveillance by intelligently assessing traffic conditions, counting vehicles, and making real-time decisions to categorize road status as either "Traffic" or "No Traffic." The user-friendly interface includes visual feedback with bounding boxes and overlaid text for easy interpretation. This project's significance extends to smart cities, transportation planning, and public safety, providing actionable insights for optimizing traffic flow and enhancing urban mobility. With its graceful termination option and potential for future enhancements, the Smart Traffic Surveillance System exemplifies the seamless integration of artificial intelligence into practical applications for smarter, data-driven urban environments.
</p>
</div>
<h2 id = "demo">Video Demo</h2>
<div id = "vid_demo">
    <video id = "vid"  controls src = {cam} >  </video>

</div>


</div>
	</>)
}
export default Camera;