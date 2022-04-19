import * as React from 'react';
import Typography from '@mui/material/Typography';






export default function Heading(props) {
  if (!props.visible){
    return(
   
      <Typography variant="h2" align="center" gutterBottom>
      Please search a username in the search bar Above
    </Typography>
    )
  }
  else{
  return (
<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-md-9 col-lg-7 col-xl-5">
        <div class="card" style={{borderRadius: "15px"}}>
          <div class="card-body p-4">
            <div class="d-flex text-black">
              <div class="flex-shrink-0">
                <img src={props.avatar} alt="Generic placeholder image" class="img-fluid" style={{width: "180px", borderRadius: "10px"}} />
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="mb-1">{props.name}</h5>
                <p class="mb-2 pb-1" style={{color:"#2b2a2a"}}>{props.bio}</p>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2" style={{backgroundColor:"#efefef"}}>
                  <div>
                    <p class="small text-muted mb-1">Number of repositories</p>
                    <p class="mb-0">{props.repo}</p>
                  </div>
                  <div class="px-3">
                    <p class="small text-muted mb-1">Followers</p>
                    <p class="mb-0">{props.followers}</p>
                  </div>
   
                </div>
                <div class="d-flex pt-1">
               
                <a href={props.profile}>
                  <button type="button"  class="btn btn-primary flex-grow-1" >Follow</button>
                </a>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)}
  }