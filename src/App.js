import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/example`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    bio,
    location,
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setLocation(location);
    setBio(bio);
  };
  
  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  
  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div className="App container">
      <div className="card height form col-8 mt-5">
      <h1 className="titulo">Search UserName GitHub</h1>
        <form className="Search">
          
          <div className="input-group mb-3">
            <input
              placeholder="UserName GitHub"
              className="form-control input"
              name="UserName GitHub"
            />
            <span className="btn input-group-text botom">Buscar</span>
          </div>
        </form>
      </div>

      <div class="inf card mb-3 mt-5 col-8">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="{avatar}"
              class="img-fluid rounded-circle mt-3"
              width="150"
              
            />
          </div>

          <div class="col-md-7 ">
            <div class="card-body text-white">
              <div class="row">
                <div class="col">{userName}</div>
                <div class="col">fecha de inicio</div>
              </div>

              <p class="card-text mt-4 mb-4">
                <small class="text">{bio}</small>
              </p>

              <div class="card" id="card-inter">
                <div class="row">
                  <div class="col">
                    <h5 className="text-center">Repositories</h5>
                    <p className="text-center">{repos}</p>
                  </div>
                  <div class="col">
                    <h5 className="text-center">Followers</h5>
                    <p className="text-center">{followers}</p>
                  </div>
                  <div class="col">
                    <h5 className="text-center">Following</h5>
                    <p className="text-center">{following}</p>
                  </div>
                </div>
              </div>
              <div class="row row-cols-2 mt-3 mb-4">
                <div class="col">Ubicacion</div>
                <div class="col">twitter</div>
                <div class="col mt-4">blog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
