import Return from "./return";
import spam from "./spam.JPG";
import "./spam.css";
import isSpam from "./isSpam.JPG";
import ham from "./ham.JPG"
const Spam = ()=>{
return(<>

<Return/>
<div id = "spam">
<h2 style = {{fontWeight:"bold"}}>Spam SMS Detector (RNN)</h2>
<img id = "spam_" src = {spam}/>

<div id = "spam_info" >
<br/> 
<p>Technologies used: Python, Tensorflow, Numpy, Google Colab, Tokenization, Pandas  </p>
<p>Hardware used: N/A</p>
<p>Project type:Personal Project</p>
<p>Description:
Developed a robust spam detection system using advanced deep learning techniques with Keras and TensorFlow. The project, centered around a spam or ham dataset, aimed to create an efficient model for analyzing and categorizing SMS messages as spam or non-spam. Extensive preprocessing of the text data was conducted, involving tokenization and padding, to ensure optimal input for the neural network. The model architecture featured a recurrent neural network (RNN) design, specifically employing stacked SimpleRNN layers, along with Embedding and SpatialDropout1D layers to capture intricate temporal patterns within the SMS messages. During training, the model utilized binary cross-entropy loss and the Adam optimizer, resulting in a highly accurate discrimination between spam and non-spam messages. Additionally, a user-friendly prediction function was implemented, enabling real-time evaluation of SMS messages and showcasing the practical application of the trained model. Techniques such as tokenization and label encoding were instrumental in data preparation and model training, contributing to the project's success in creating an effective method for identifying spam message. This endeavor stands as a testament to advanced natural language processing and deep learning proficiency, particularly tailored for the intricate task of spam detection in textual data.
</p>
</div>
<div id = "spam_demo">
   <img  src = {isSpam}/>
   <h2 style = {{fontWeight:"bold"}}>Is Spam Demo</h2>
    <br/>
     <img  src = {ham}/>
   <h2 style = {{fontWeight:"bold"}}>Not Spam Demo</h2>
</div>


</div>
	</>)
}
export default Spam;