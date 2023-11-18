import shop from "./e-com.JPG";
import alarm from "./alarm.jpg";
import "./projects.css";
import social from"./social.JPG";
import all_pic from "./all.JPG";
import spam from "./spam.JPG";
import camera from "./camera.JPG";
import { useNavigate } from 'react-router-dom';
const Projects = ()=>{
const navigate = useNavigate();
return(<>
<div id='skills'>
<h2 style = {{fontWeight:'bold'} }id = "project_tittle">  Projects </h2>
 <div class="main">
  <ul class="cards">
    <li class="cards_item">
      <div id = "j"class="card" tabindex="0">
        <div class="card_image"><img src={shop} alt="an online shop . "/></div>
        <div class="card_content">
          
          <div class="card_text">
          <span class="note">E-Commerece Website.</span>
                <br/>
           <div class= " buttons"> <button class = "btn-sm" onClick = {()=>navigate('/shop')}>View Demo</button>   <button class = "btn-sm"> <a href = "https://all-terrain-shop.netlify.app">Live website </a> </button></div>
            <p>A full-stacked Online shopping website. The shop allows the user to sign up for an account and browse through a variety of items</p>
            <p>The user can then add an item to cart, or if the user changed their mind then they can remove the item from cart. The total amount is going to be displayed in the cart section.  </p>
            
          </div>
        </div>
      </div>
    </li>

    <li class="cards_item">
      <div id = "j"class="card" tabindex="0">
        <div class="card_image profile_pic"><img  id = "profile_pic"src={social} alt="a social media website"/></div>
        <div class="card_content">
       
          <div class="card_text">
          <span class="note">Connect-Sphere.</span>
   <br/>
           <div class= " buttons"> <button class = "btn-sm" onClick = {()=>navigate('/media')}>View Demo</button>   <button class = "btn-sm"> <a href = "https://connectsphere.netlify.app">Live website</a> </button></div>
            <p>Connect with your friends today with this full-stacked social media website!. Connect-Sphere allows you to post about your thoughts and moments in your daily lives. In addition, every user has their own customizable profile!
            </p>
            <p>Additionally, your friends can also react to your posts by using the like and comment features. You can also follow a user in order to connect with them. </p>
            <p>You can also connect with your friend one step further by using the message function, simply click on the  user and you will be able to navigate to a message button, in which will open a private chatbox 
            </p>
             
          </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div id = "j" class="card" tabindex="0">
        <div class="card_image"><img src={alarm} alt="an alarm"/></div>
        <div class="card_content">
         
          <div class="card_text">
            <span class="note">Arduino Cloud Alarm.</span>
            <br/>
           <div class= " buttons"> <button class = "btn-sm" onClick = {()=>navigate('/alarm')}>View Demo</button>   <button class = "btn-sm" > <a href= "https://github.com/Lnguyen19/arduino_cloud_alarm">Source Code </a> </button></div>
            <p> Smart Alarm Clock seamlessly blending Arduino precision with the convenience of cloud computing. Witness time management redefined as this unique project not only displays real-time on a sleek LCD screen but also allows you to set alarms remotely via the Arduino Cloud.</p>
           
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
<br/>
<br/>
<h2 id = "project_tittle"> <i class="bi bi-robot"></i>AI & Computer Vision Projects</h2>
<div class="main">
  <ul class="cards">
    <li class="cards_item">
      <div id = "j"class="card" tabindex="0">
        <div class="card_image"><img src={all_pic} alt="an online shop . "/></div>
        <div class="card_content">
          
          <div class="card_text">
          <span class="note">Avatar Generator</span>
                <br/>
           <div class= " buttons"> <button class = "btn-sm" onClick = {()=>navigate('/avatar')}>View More</button>   <button class = "btn-sm"> <a href = "https://github.com/Lnguyen19/Avatar_generator">Source Code </a> </button></div>
            <p>
This project involves building a Generative Adversarial Network (GAN) using the Keras library for deep learning. The GAN consists of a generator and a discriminator. The generator creates synthetic images from random noise, while the discriminator aims to distinguish between real and generated images</p>
            <p>The code includes the implementation of both the generator and discriminator models. The training process involves updating the discriminator and generator iteratively.</p>
            
          </div>
        </div>
      </div>
    </li>

    <li class="cards_item">
      <div id = "j"class="card" tabindex="0">
        <div class="card_image profile_pic"><img  id = "profile_pic"src={spam} alt="a social media website"/></div>
        <div class="card_content">
       
          <div class="card_text">
          <span class="note">SMS Spam Detection</span>
   <br/>
           <div class= " buttons"> <button class = "btn-sm" onClick = {()=>navigate('/spam')}>View More</button>   <button class = "btn-sm"> <a href = "https://github.com/Lnguyen19/spam_detections">Source Code</a> </button></div>
            <p>Developed a spam detection system using Keras and TensorFlow, employing a recurrent neural network (RNN) architecture. Trained on SMS data, the model accurately classifies messages as spam or non-spam. The program features a user-friendly prediction function for efficient evaluation, showcasing expertise in natural language processing and deep learning techniques.
   </p>
            
             
          </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div id = "j" class="card" tabindex="0">
        <div class="card_image"><img src={camera} alt="an alarm"/></div>
        <div class="card_content">
         
          <div class="card_text">
            <span class="note">Traffic Camera</span>
            <br/>
           <div class= " buttons"> <button class = "btn-sm" onClick = {()=>navigate('/camera')}>View Demo</button>   <button class = "btn-sm" > <a href= "https://github.com/Lnguyen19/Traffic_Camera">Source Code </a> </button></div>
            <p> This Python project utilizes the OpenCV library to implement a real-time object detection system for traffic monitoring using YOLOv4-tiny, a popular deep learning-based object detection algorithm. The system analyzes a video (specified by the "video_path" variable) and identifies objects within each frame, focusing specifically on cars. It will update the traffic condition based on the amount of cars detected.
</p>
           
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>

</div>
<br/>
<br/>
  </>)

} 
export default Projects;