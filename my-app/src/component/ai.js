import { useState } from 'react';
import '../css/web.css';

export default function Ai() {
  const [reviews, setReviews] = useState([
    { text: "This is an amazing course for the beginners who want to understand everything about in machine learning!. ", reviewer: "– Jackson K.", stars: "★★★★★", isDefault: true },
    { text: "Great course! The theory and the practical part were explained in a simple way!", reviewer: "–Shekhmous M.", stars: "★★★☆☆", isDefault: true },
    { text: "This course was brilliant!", reviewer: "–Jon A.", stars: "★★★★★", isDefault: true },
  ]);

  const [newText, setNewText] = useState('');
  const [newReviewer, setNewReviewer] = useState('');
  const [newStars, setNewStars] = useState('');

  return (
    <div>
      <div id='blackBack'>
        <div id='leftBack'>
          <h3>Machine Learning A-Z: AI, Python & R</h3>
          <p>Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.</p>
          <h3>What you will learn: </h3>
          <ol id='learn'>
            <li>Master Machine Learning on Python & R</li>
            <li>Make accurate predictions</li>
            <li>Handle specific topics like Reinforcement Learning, NLP and Deep Learning</li>
          </ol>
        </div>
        <div id='rightBack'>
          <img src='https://i.pinimg.com/736x/a4/45/d8/a445d88a9a7aeafb686ece191c60bd82.jpg' alt='Course' />
        </div>
      </div>

      <div id='reviews'>
        <h3>Customer Reviews</h3>

        {/* Form to add new review */}
        <form id='addReviewForm' onSubmit={(e) => {
          e.preventDefault();
          setReviews([...reviews, {
            text: newText,
            reviewer: newReviewer,
            stars: newStars,
            isDefault: false
          }]);
          setNewText('');
          setNewReviewer('');
          setNewStars('');
        }}>
          <input 
            type='text' 
            placeholder='Enter review text' 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
            required
          />
          <input 
            type='text' 
            placeholder='Reviewer name' 
            value={newReviewer} 
            onChange={(e) => setNewReviewer(e.target.value)} 
            required
          />
          <input 
            type='text' 
            placeholder='Stars (e.g. ★★★★★)' 
            value={newStars} 
            onChange={(e) => setNewStars(e.target.value)} 
            required
          />
          <button type='submit'>Add Review</button>
        </form>

        {/* Display reviews */}
        {reviews.map((review, index) => (
          <div id='reviewCard' key={index}>
            <p id='reviewText'>"{review.text}"</p>
            <div id='reviewInfo'>
              <span className='reviewer'>{review.reviewer}</span>
              <span className='stars'>{review.stars}</span>
            </div>
            {!review.isDefault && (
              <button 
                className='deleteBtn' 
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this review?')) {
                    setReviews(reviews.filter((_, i) => i !== index));
                  }
                }}>
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}