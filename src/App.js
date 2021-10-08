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

  const date = moment(created_at).calendar("MMMM Do YYYY");

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
    <div className="">
      <div className="titulo row text-white">
        <div className="col-6 h3 fw-bold">UserFinder</div>
      </div>
      <div className="card form col-8 mt-5">
        <form className="Search" onSubmit={handleSubmit}>
          <div className="floating-label-group input-group">
            <input
              name="UserName GitHub"
              value={userInput}
              onChange={handleSearch}
              type="text"
              id="username"
              className="form-control input"
              required
            />
            <label className="floating-label">
              <i className="fas fa-search"></i>
              <span className="span text-white">Username GitHub...</span>
            </label>
            <button className="btn input-group-text botom">Search</button>
          </div>
        </form>
      </div>

      <div className="inf card mb-3 mt-4 col-8">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={avatar}
              className="img-fluid rounded-circle mt-3"
              width="150"
            />
          </div>

          <div className="col-md-7 ">
            <div className="card-body text-white">
              <div className="row">
                <div className="col fw-bold h5">{name}</div>
                <time className="col" dateTime={created_at}>
                  Joined {date}
                </time>
              </div>

              <p className="card-text mt-4 mb-4">
                <small className="text">
                  {bio ? bio : "This user does not have a bio"}
                </small>
              </p>

              <div className="card" id="card-inter">
                <div className="row mb-2">
                  <h5 className="">
                    Repositories: <span className="fw-bold h4">{repos}</span>
                  </h5>
                </div>

                <div className="col mb-2">
                  <h5 className="">
                    Followers: <span className="fw-bold h4">{followers}</span>
                  </h5>
                </div>
                <div className="col mb-2">
                  <h5 className="">
                    Following: <span className="fw-bold h4">{following}</span>
                  </h5>
                </div>
              </div>
              <div className="row row-cols-2 mt-3 mb-4">
                <div className="col">
                  <span className="h6">{location ? location : "Unknown"}</span>
                </div>
                <div className="col">
                  <span className="h6">
                    @
                    {twitter_username
                      ? twitter_username
                      : "This user does not have a twitter"}
                  </span>
                </div>
                <div className="col mt-4">
                  <a href={blog} target="_blank">
                    <span className="h6">{blog}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
    <div className="container mb-4" >
      <div className="row">
        <div className="col-sm-12">
          <div className="copyright-box">
            <p className="copyright">&copy; Copyright <strong>Abraham Moreno</strong>. All Rights Reserved</p>
              Designed by <a  className="text-white" style={{ fontWeight: "bold" }}>Abraham Moreno</a>
            </div>
          </div>
        </div>

    
    
      <a href="https://github.com/Abraham-maker" target="_blanck" className="icono-social  redondo" id="github"><i className="icon fab fa-github-square"></i></a>
          
          
      <a  href="https://www.linkedin.com/in/abraham-moreno-145b6a1b6/" target="_blanck" className="icono-social  redondo" id="linkedin"><i className="icon fab fa-linkedin"></i></a> 


      <a href="https://www.instagram.com/devjmx/" target="_blanck" class="icono-social  redondo" id="instagram"><i className="icon fab fa-instagram-square" ></i></a> 


      <a  href="https://twitter.com/JholfrenM" target="_blanck" className="icono-social  redondo" id="twitter"><i  className="icon fab fa-twitter-square"></i></a>
    
      </div>
  </footer>
  


    </div>
  );
}

export default App;
