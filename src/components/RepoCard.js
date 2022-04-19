import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Repos = ({ repos, loading }) => {
  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div style={{ position: "relative", left: "20rem", flex:"0 0 50%"}}className='flex flex-col rounded my-8 hover:grid-cols-3 bg-[#1E2342]'>
      {repos.map((repo) => (
       <div class="card" style={{width:"35rem", padding:"20px", margin:"20px"}}>
  <div class="card-body">
    <h5 class="card-title">{repo.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{repo.visibilty}</h6>
    <p class="card-text">{repo.description}</p>
    <a href={repo.html_url} class="card-link">Repo Link</a>
    <a href={repo.owner.html_url} class="card-link">Profile link</a>
  </div>
</div>
      ))}
    </div>
  );
};

export default Repos;



{/* <Card sx={{ width: "50%" }}>
// <CardActionArea>

//   <CardContent>
//     <Typography gutterBottom variant="h5" component="div">
//       {repo.name} 
//     </Typography>
//     <Typography variant="body2" color="text.secondary">
//       {repo.visibilty}
//       {repo.forks_count}Forks
//     </Typography>
//     <a href={repo.url}></a>
//   </CardContent>
// </CardActionArea>
// </Card> */}