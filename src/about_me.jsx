import "./about_me.css"
import me from "./me.jpg"
const About_me = ()=>{

return(<>
<div id = "aboutMe">
<h2 style = {{fontWeight :"bold"}}> About me</h2>
<div id = "bio">
 <p id  = "story">My name is Lam Nguyen, I was born in Tra Vinh Province in South-Western Vietnam. Growing up, I have always had an undying passion in technology
  <p >my childhood dream was to be able to get directly involved in the evolution of technology and it was this childhood dream  that has led me to this field. I was born
 into a very rural village in Vietnam so my perception of future technology was very different from what most American kids would have, however after immigrating to the U.S and being able
 to witness technologies that I have never seen before, I was able to gain a new understanding of what the future will be. This revelation did not only encouraged me but also 
 enable me to have a deeper passion for technology, I truly hope that I will be able to make a difference in the technology of mankind in the future. Asides from coding, martial arts
 is my hobby, I grew up in a pretty rough neighborhood, so I ended up learning martial arts as a way to protect myself. After a few years of practicing martial arts, I was able to
 become an assistant coach for the teens and kids classes. These classes did not only teach them life-saving skills but it was also keeping them out of 
 trouble as well. Therefore I truly wish that I can make a difference in the future development of technology just like how I made a difference in
 the lives of these kids.
  </p>


 </p>
<img  id = "me_"src = {me} alt = "a picture of me"/>
</div>

</div>
	</>)

}
export default About_me;