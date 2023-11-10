import all_pic from "./all.JPG";
import "./avatar.css"
import trained_60 from './trained-60.png';
import trained_109 from"./trained-109.png";
import trained_62 from "./trained-62.png";
import trained_65 from "./trained-65.png";
import trained_66 from "./trained-66.png";
import trained_30 from "./trained-30.png";
import trained_72 from "./trained-72.png";
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
   
   <img  src = {trained_109}/>
   
   <img  src = {trained_62}/>
   
   <img  src = {trained_65}/>
   <br/>
   <img  src = {trained_66}/>
  
   <img  src = {trained_30}/>
   <img  src = {trained_72}/>
   <br/>

</div>


</div>
	</>)

}
export default Avatar;