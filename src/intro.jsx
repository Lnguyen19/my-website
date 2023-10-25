import Lam from './lam_alt.png'
import shop from './e-com.JPG'
import space from './space.mp4'
import orange from './orange.mp4'
import './intro.css'
const Intro = ()=>{
const frontendSkills = ["JavaScript", "React","React Router" ,"HTML", "CSS", "Bootstrap"];
    const backendSkills = ["C++", "Java", "Python", "Express", "Node.js", "MySQL","Arduino Cloud"];
  
return (<>
<div id = 'intro'>
<div class = 'header-container'>
  <video autoPlay loop muted className='background-video'>
                    <source src={orange} type="video/mp4" />
                </video>
<div class = 'text-section'>
  <h2 class = 'text-lg' style = {{fontWeight:'bold',fontSize:'54px',color:'white'}} > Lam Nguyen </h2>
  <br/> 
  <p style = {{fontSize:'24px', color:'white'}}> Developer based in San Diego California</p>

  </div>
  <img className = 'profile-picture'src = {Lam}/>
</div> 
<br/>
</div>










	</>)

}
export default Intro;