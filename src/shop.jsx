import NavBar from "./navBar";
import "./shop.css";
import boat from "./boat_section.JPG";
const Shop = ()=>{
  const videoId = 'qZBfK8SsobE'; 
return(<>
<NavBar/>

<div id = "shopping">
<h2>Shop</h2>
<img id = "boat" src = {boat}/>
<div id = "shop_info"> 
<p>Technologies used: Javascript,HTML,CSS, React,Express,Node,MySQL,Bootstrap</p>
<p>Hardware used: N/A</p>
<p>Project type: Personal Project</p>
<p>Description: A fully functional online E-comerce website, with user authentication. The online store has three different sections
to choose from , Cars , Boats and Bikes. The user can click on the view button in order to see a more detailed view as well as their respective stats.
In addition the user can click on "buy" in order to purchase. Similar to most online shopping websites, the user can then navigate to the cart 
section in order to confirm or remove their orders.
</p>
</div>
<div id = "vid_demo">
    <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe>

</div>


</div>
	</>)
}
export default Shop;