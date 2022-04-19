import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Typography from "@mui/material/Typography";
import Pagination from "./components/Pagination";
import Repos from "./components/RepoCard"

export default function App() {
  const [Username, setUsername] = useState();
  const [username, setusername] = useState();
  
  const [Avatar, setAvatar] = useState();
  const [githubProfile, setProfile] = useState();
  const [followers, setFollowers]=useState()
  const[bio, setBio]=useState()
  const [repo, setRepo]=useState()
  const [repos, setRepoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);
  const [visible, setVisibilty]=useState(false)



  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  function onChange(e) {
    setusername(e.target.value);
  }



  const getDetails = async () => {
    const res = await axios.get("https://api.github.com/users/"+username);
    setUsername(res.data.login);
    setAvatar(res.data.avatar_url);
    setProfile(res.data.html_url)
    setBio(res.data.bio)
    setVisibilty(true)
    setRepo(res.data.public_repos)
    const response=await axios.get("https://api.github.com/users/"+username+"/followers")
    setFollowers(response.data.length)
    console.log(res.data.login);
    const { data } = await axios.get("https://api.github.com/users/"+username+"/repos")
    
    setRepoList(data)
  };

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="relative" style={{backgroundColor:"white"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <input
              onChange={onChange}
              name="Search Username"
              value={username}
           
              type="text"
            
            />

         

            <Button
              variant="contained"
              style={{ marginTop: "10px" }}
              onClick={getDetails}
            >
              Fetch Data
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Heading name={Username} avatar={Avatar} profile={githubProfile} followers={followers} bio={bio} repo={repo} visible={visible} />
      <Repos repos={currentRepos} />
      <Pagination
      
        
        reposPerPage={reposPerPage}
        totalRepos={repos.length}
        paginate={paginate}
      />

      <Footer style={{ position: "fixed", left: "20rem"}}/>
    </div>
  );
}
