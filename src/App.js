import { useState, useEffect } from "react";
import "./App.css";
import moment from 'moment'
function App() {
  const [user, setUser] = useState("Abraham-maker");
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });


  }, [user]);

 

  const {
    name,
    following,
    followers,
    bio,
    location,
    avatar_url: avatar,
    public_repos: repos,
    twitter_username,
    blog,
    created_at,
  } = data;

  const date = moment(created_at).format("MMMM Do YYYY");

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(userInput);
  };

  return (
    <div className="App container">
      <div className="card form col-8 mt-5">
        <h1 className="titulo">Search UserName GitHub</h1>

        <form className="Search" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              placeholder="UserName GitHub"
              className="form-control input"
              name="UserName GitHub"
              value={userInput}
              onChange={handleSearch}
            />
            <span className="btn input-group-text botom">Buscar</span>
          </div>
        </form>
      </div>

      <div class="inf card mb-3 mt-5 col-8">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={avatar}
              class="img-fluid rounded-circle mt-3"
              width="150"
            />
          </div>

          <div class="col-md-7 ">
            <div class="card-body text-white">
              <div class="row">
                <div class="col">{name}</div>
                <time class="col" dateTime={created_at}>Joined {date}</time>
              </div>

              <p class="card-text mt-4 mb-4">
                <small class="text">
                  {bio ? bio : "This user does not have a bio"}
                </small>
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
                <div class="col">{location ? location : "Unknown"}</div>
                <div class="col">
                  {twitter_username
                    ? twitter_username
                    : "This user does not have a twitter"}
                </div>
                <div class="col mt-4">{blog}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
