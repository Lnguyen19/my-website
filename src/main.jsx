import NavBar from "./navBar"
import Intro from "./intro"
import Projects from "./projects"
import My_skills from "./my_skills"
import About_me from "./about_me";
import './main.css';
import Contact from "./contact";
const Main = ()=>{


return(
	    <>
      <NavBar />
      <Intro id="intro" />
      <div class="subete">
        <My_skills id="skill" />
        <br />
        <Projects id="skills" />
        <About_me id="aboutMe" />
        <Contact id="contact" />
      </div>
    </>

)
}
export default Main;