import { useState } from 'react';
import '../css/web.css';

export default function Web() {
  const [reviews, setReviews] = useState([
    { text: "This course explained web basics so clearly. Now I can build my own websites!", reviewer: "– Sarah K.", stars: "★★★★★", isDefault: true },
    { text: "Great introduction to HTML, CSS & JavaScript. Perfect for beginners!", reviewer: "– Ahmed M.", stars: "★★★☆☆", isDefault: true },
    { text: "Loved the examples and projects. The CSS part was especially helpful!", reviewer: "– Lina J.", stars: "★★★★★", isDefault: true },
  ]);

  const [newText, setNewText] = useState('');
  const [newReviewer, setNewReviewer] = useState('');
  const [newStars, setNewStars] = useState('');

  return (
    <div>
      <div id='blackBack'>
        <div id='leftBack'>
          <h3>Complete web development basics course</h3>
          <p>Only web development course that you will need. Covers HTML, CSS, JavaScript</p>
          <h3>What you will learn: </h3>
          <ol id='learn'>
            <li>How HTML is used to structure content</li>
            <li>How CSS is used to style and layout pages</li>
            <li>How JavaScript is used to respond to user actions (click, input, etc.)</li>
          </ol>
        </div>
        <div id='rightBack'>
          <img src='https://i.pinimg.com/474x/bb/17/1f/bb171ff3c32d00aff7620053d6b192f2.jpg' alt='Course' />
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


