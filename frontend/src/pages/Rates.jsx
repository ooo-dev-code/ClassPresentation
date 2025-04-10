import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import "../styles/Ratings.css";

function Rates() {
  const [thoughts, setThoughts] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    axios
      .get("http://localhost:5000/thought")
      .then((response) => {
        setThoughts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (

      <div className="thoughts-container">
        {thoughts.map((thought) => (
          <div key={thought._id} className="thought-card">
            <h2 className="author">{thought.user.username}</h2>
            
            <div className="content">
              {thought.commentary.length > 100 ? (
                <>
                  {thought.commentary.substring(0, 100)}...
                  <button onClick={() => alert(thought.commentary)}>Click to see more</button>
                </>
              ) : (
                thought.commentary
              )}
            </div>
          </div>
        ))}
      </div>
  );
}

export default Rates;
