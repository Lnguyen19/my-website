import NavBar from "./navBar";
import "./media.css"
import social from"./social.JPG";
import Return from "./return";
const Media = ()=>{
	const post = "RdEYphmdfko";
	const like_and_comment = "vgEx9dobIRU";
	const follow = "3RSBtobPLhA";
	const profile = "a_XDGnCW534";
	const bio = "rblRdivTTyQ";
	const messages = "nj-GLwcvUI4";
	const search = "__g45eLsMRo";
return(<>
<Return/>
<div id = "media">
<h2 style = {{fontWeight:"bold"}}>Social Media</h2>
<img id = "profile_page" src = {social}/>
<div id = "media_info"> 
<p>Technologies used: MongoDB, Express Js, React, Node Js (MERN Stack), CSS,Bootstrap, Multer, Cloudify</p>
<p>Hardware used: N/A</p>
<p>Project type: Personal Project</p>
<p>Description: Developed a feature-rich social media platform using the MERN (MongoDB, Express.js, React, Node.js) stack, allowing users to seamlessly post, comment, like, follow, and message within a dynamic online community. The platform enables users to personalize their profiles with custom pictures and biographies.
</p>
</div>
<div id = "vid_demo">
<h2 style = {{fontWeight:"bold"}}> Post Function</h2>
    <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${post}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
</div>
<div id = "vid_demo">
<h2 style = {{fontWeight:"bold"}}> Like and Comment Functions</h2>
    <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${like_and_comment}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
</div>

<div id = "vid_demo">
<h2 style = {{fontWeight:"bold"}}> Follow and Unfollow Functions</h2>
    <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${follow}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
</div>

<div id = "vid_demo">
<h2 style = {{fontWeight:"bold"}}> Profile and Background Image Functions</h2>
    <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${profile}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
</div>

<div id = "vid_demo">
<h2 style = {{fontWeight:"bold"}}> Biography Function</h2>
    <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${bio}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
</div>

<div id = "vid_demo">
<h2 style = {{fontWeight:"bold"}}> Message Function</h2>
    <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${messages}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
</div>

<div id = "vid_demo">
<h2 style = {{fontWeight:"bold"}}>Search a User Function</h2>
    <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${search}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
</div>

</div>
	</>)
}
export default Media;