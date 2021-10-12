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
        <div className="card height col-8 mt-5">
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
        <div className="col-6 h3 fw-bold">
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="50"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          UserFinder
        </div>
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
              <span className="span text-white">Search Username GitHub...</span>
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
              className="img-fluid rounded-circle mt-4"
              width="200"
            />
          </div>

          <div className="col-md-7 ">
            <div className="card-body text-white">
              <div className="row">
                <div
                  className=" col fw-bold h5"
                  style={{ color: "##f2f6f9", fontSize: "18px" }}
                >
                  {name}
                </div>
                <time
                  className="joined col"
                  style={{ color: "#f2f6f9", fontSize: "18px" }}
                  dateTime={created_at}
                >
                  Joined {date}
                </time>
              </div>

              <p className="card-text mt-4 mb-4">
                <small
                  className="text"
                  style={{ color: "#7d87a2", fontSize: "15px" }}
                >
                  {bio ? bio : "This user does not have a bio"}
                </small>
              </p>

              <div className="card" id="card-inter">
                <div class="container">
                  <div class="row row-cols-3">
                    <div class="col text-center">
                      <p className="font">Repos</p>
                    </div>
                    <div class="col text-center">
                      <p className="font">Followers</p>
                    </div>
                    <div class="col text-center">
                      <p className="font">Following</p>
                    </div>

                    <div class="col text-center">
                      <span className="fw-bold h5">{repos}</span>
                    </div>
                    <div class="col text-center">
                      <span className="fw-bold h5">{followers}</span>
                    </div>
                    <div class="col text-center">
                      <span className="fw-bold h5">{following}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row-cols-2 mt-3 mb-4">
                <div className="col">
                  <span className="h6">
                    <i class="fas fa-map-marker-alt"></i>{" "}
                    {location ? location : "Unknown..."}
                  </span>
                </div>
                <div className="col">
                  <span className="h6">
                    <i class="fab fa-twitter"></i> @
                    {twitter_username ? twitter_username : "not Available..."}
                  </span>
                </div>
                <div className="col-12 mt-4">
                  <a href={blog} id="link" target="_blank">
                    <span className="h6">
                      <i class="fas fa-link"></i>{" "}
                      {blog ? blog : "not Available..."}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container mb-4">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  &copy; Copyright <strong>Abraham Moreno</strong>. All Rights
                  Reserved
                </p>
                Designed by{" "}
                <a className="text-white" style={{ fontWeight: "bold" }}>
                  Abraham Moreno
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://github.com/Abraham-maker"
            target="_blanck"
            className="icono-social  redondo"
            id="github"
          >
            <i className="icon fab fa-github-square"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/abraham-moreno-145b6a1b6/"
            target="_blanck"
            className="icono-social  redondo"
            id="linkedin"
          >
            <i className="icon fab fa-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/devjmx/"
            target="_blanck"
            class="icono-social  redondo"
            id="instagram"
          >
            <i className="icon fab fa-instagram-square"></i>
          </a>

          <a
            href="https://twitter.com/JholfrenM"
            target="_blanck"
            className="icono-social  redondo"
            id="twitter"
          >
            <i className="icon fab fa-twitter-square"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
