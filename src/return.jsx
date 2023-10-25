import { useNavigate } from 'react-router-dom';
const Return = ()=>{
const navigate = useNavigate();
return(<>
	 
<nav id='menu' class="navbar navbar-expand-lg navbar-light"  >
  <div class="container-fluid">
    <a class="navbar-brand " href="#"><i class="bi bi-compass"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav " style = {{fontWeight:'bold'}}>
        <li class="nav-item " >
          <a class="nav-link ho" aria-current="page" style = {{frontWeight:'bold'}} onClick = {()=>navigate('/')}><i class="bi bi-house-check-fill "></i>Home</a>
        </li>
       



      </ul>
    </div>
  </div>
</nav>

	</>)
}
export default Return;