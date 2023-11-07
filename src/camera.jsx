import "./camera.css";
import Return from "./return";
import camera from "./camera.JPG";
const Camera = ()=>{

return(<>
<Return/>

<div id = "shopping">
<h2>Traffic Camera</h2>
<img id = "boat" src = {camera}/>
<div id = "shop_info"> 
<p>Technologies used: Python, OpenCV, NumPy</p>
<p>Hardware used: N/A</p>
<p>Project type: Personal Project</p>
<p>Description: Developed a traffic monitoring system using Python and OpenCV to analyze pre-recorded video footage. The program employs the BackgroundSubtractorMOG2 algorithm for background subtraction, allowing for the identification and tracking of vehicles through contour detection and bounding rectangles. The system triggers a "traffic" alert when a predefined threshold of moving objects is reached. The graphical interface displays the original video frame alongside a masked view, providing valuable insights into traffic patterns. This project showcases proficiency in computer vision, image processing, and algorithm implementation for video analysis.
</p>
</div>
<h2 id = "demo">Video Demo</h2>
<div id = "vid_demo">
    <iframe
        width="640"
        height="360"
        src= "https://www.youtube.com/embed/vnHDrBIB_C0"
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe>

</div>


</div>
	</>)
}
export default Camera;