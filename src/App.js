import { useState, useEffect } from "react";
import "./App.css";
import moment from "moment";
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

  if (!data) {
    return (
      // Loading
      <div className="App container">
        <div className="card height form col-8 mt-5">
          <h1 className="titulo">
            Fetching Data
            <div className="loader loader--style5" title="4">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="30px"
                viewBox="0 0 24 30"
                style={{ enableBackground: "new 0 0 50 50" }}
                xmlSpace="preserve"
              >
                <rect x="0" y="0" width="4" height="10" fill="#333">
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 20; 0 0"
                    begin="0"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="10" y="0" width="4" height="10" fill="#333">
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 20; 0 0"
                    begin="0.2s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="20" y="0" width="4" height="10" fill="#333">
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 20; 0 0"
                    begin="0.4s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
          </h1>
        </div>
      </div>
    );
    
  }
  return (
    <div className="container principal">
      <div className="card form col-8 mt-5">
        <h1 className="titulo">Search GitHub User</h1>

        <form className="Search" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              placeholder="GitHub Username"
              className="form-control input"
              name="UserName GitHub"
              value={userInput}
              onChange={handleSearch}
            />
            <button className="btn input-group-text botom">Buscar</button>
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
                <time class="col" dateTime={created_at}>
                  Joined {date}
                </time>
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
