import all_pic from "./all.JPG";
import "./avatar.css"
import trained_60 from './trained-60.png';
import trained_32 from "./trained-32.png";
import trained_53 from "./trained-53.png";
import trained_49 from "./trained-49.png";
import trained_29 from "./trained-29.png";
import trained_54 from "./trained-54.png";
import trained_21 from "./trained-21.png";
import Return from "./return";
const Avatar = ()=>{


return(<>
<Return/>
<div id = "avatar">
<h2 style = {{fontWeight:"bold"}}>Avatar Generator (DCGAN)</h2>
<img id = "gen" src = {all_pic}/>

<div id = "avatar_info" >
<br/> 
<p>Technologies used: Python, Tensorflow, Numpy, Google Colab  </p>
<p>Hardware used: N/A</p>
<p>Project type: School and Personal Project</p>
<p>Description: This project showcases the implementation of a Deep Convolutional Generative Adversarial Network (DCGAN) using Python, NumPy, and the Keras deep learning library. The DCGAN architecture consists of a generator and a discriminator, trained iteratively to generate realistic images. The generator takes random noise as input and transforms it into synthetic images, while the discriminator is trained to distinguish between real and generated images. The training dataset, consisting of images resized to a specified size, is loaded and processed using NumPy and the Python Imaging Library (PIL). The generator and discriminator models are constructed with convolutional layers for effective feature extraction. The project employs Adam optimizers for both the discriminator and the combined DCGAN model. Training progress is visualized with generated images saved at regular intervals. The final result is a powerful image generation model, demonstrating the application of deep learning in creating visually compelling content.
</p>
</div>
<div id = "outputs">
   <h2 style = {{fontWeight:"bold"}}>My favorite outputs</h2>
   <img  src = {trained_60}/>
   
   <img  src = {trained_32}/>
   
   <img  src = {trained_53}/>
   
   <img  src = {trained_49}/>
   <br/>
   <img  src = {trained_29}/>
  
   <img  src = {trained_54}/>
   <img  src = {trained_21}/>
   <br/>

</div>


</div>
	</>)

}
export default Avatar;