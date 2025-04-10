import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';
import "../styles/Ratings.css"

function Ratings() {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [thoughts, setThoughts] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        axios.get('http://localhost:5000/thought')
            .then(response => {
                setThoughts(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleRating = (index) => {
        setRating(index + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const thought = {
            user: user.user._id,
            commentary: comment,
            rate: rating,
        };

        axios.post('http://localhost:5000/thought', thought)
            .then(response => {
                console.log('Thought submitted:', response.data);
                setComment("");
                setRating(0);
                setThoughts([...thoughts, response.data]);
            })
            .catch(error => {
                console.error('Error submitting thought:', error);
            });
    }

    return (
        <div className="ratings-container">
          <div className="bgRatins"></div>
          <h1 className='rate-title'>Rate our presentation!</h1>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                onClick={() => handleRating(index)}
                className={`star ${index < rating ? 'active' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
      
          <textarea
            name="comment"
            value={comment}
            onChange={(e) => {if (e.target.value.length < 100) {setComment(e.target.value)} else {alert("You can't write more than 100 characters")}}}
            placeholder="Write your comment here"
          />            
      
          <form onSubmit={handleSubmit} className="rating-form">
            <div>Your rating: {rating} star{rating !== 1 ? 's' : ''}</div>
            <button type="submit" className='submit'>Submit</button>
          </form>

          <a href="/rates"><button 
                className="button-see">See the commentaries</button></a>

        </div>
      );
}

export default Ratings;
