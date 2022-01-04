import { useState, useEffect } from "react";
import "./App.css";
import moment from "moment";


function App() {
  const [user, setUser] = useState("");
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

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


  return (
    <div>
      
    </div>
  );
}

export default App;
