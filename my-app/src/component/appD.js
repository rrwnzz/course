import { useState } from 'react';
import '../css/web.css';

export default function AppD() {
  const [reviews, setReviews] = useState([
    { text: "This course is the best I have ever gone through!", reviewer: "– Noor K.", stars: "★★★★★", isDefault: true },
    { text: "Excellent course for all levels that are interested in learning IOS development!", reviewer: "– Marah M.", stars: "★★★☆☆", isDefault: true },
    { text: "This course was brilliant!", reviewer: "– Angela J.", stars: "★★★★★", isDefault: true },
  ]);
// these state store what user types when they want to add new reviews
  const [newText, setNewText] = useState('');
  const [newReviewer, setNewReviewer] = useState('');
  const [newStars, setNewStars] = useState('');

  return (
    <div>
      <div id='blackBack'>
        <div id='leftBack'>
          <h3>iOS & Swift - The Complete iOS App Development </h3>
          <p>From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!</p>
          <h3>What you will learn: </h3>
          <ol id='learn'>
            <li>You will create a portfolio of 15 app</li>
            <li>Become a digital nomad by working as a freelance iOS developer</li>
            <li>You will learn Xcode, UIKit and SwiftUI, ARKit, CoreML and CoreData</li>
          </ol>
        </div>
        <div id='rightBack'>
          <img src='https://miro.medium.com/v2/resize:fit:1400/1*LuY-MMFlMP1RU950-F2D6A.png' alt='Course' />
        </div>
      </div>

      <div id='reviews'>
        <h3>Customer Reviews</h3>

        {/*فورم لاضافة ريفيو جديد*/}
        <form id='addReviewForm' onSubmit={(e) => {
          // ...reviews-> بعرض اول كل الريفيوز ثم الريفيو المضاف
          e.preventDefault();
          setReviews([...reviews, {
            text: newText,
            // تيكست هو كي والفاليو الريفيو اللي راح يكتبها اليوزر
            reviewer: newReviewer,
            stars: newStars,
            isDefault: false
            // حتى تبين الديليت بوتن لما ينضاف الريفيو
          }]);
          setNewText('');
          setNewReviewer('');
          setNewStars('');
          // ارجع فيلدز الريفيو فاضيين مشان اقدر ارجع اضيف كمان ريفيو
        }}>
          <input 
            type='text' 
            placeholder='Enter review text' 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
            // السيت راح يعدل عالستيت بحيث بدل ما النيو تيكست هي سترينغ فاضي بتخزن فيها الشيء اللي راح يكتبه اليوزر
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

        {/*اعرض الريفيو*/}
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
                    const newReviews = reviews.filter(function(review, i) {
                      return i !== index;
              });
                setReviews(newReviews);

                  }
                }}>
                Delete
              </button>
              // newReview -> اراي فيها كل الريفيو ما عدا اللي بدي اجذفها
              // الشرط معناه اذا الديفولت هو فولس اظهر الديليت , الديفولت يكون فولس لما اليوزر ييجي بده يكتب ريفيو
              // فيلتر بنشأ اراي فيها الريفيوز اللي ما بدي امسحها
              // index store the index of the review we want to delete, delete second review -> index 1
              // 0 !== 1? no return review at index 0 
              // 1 !==1 ? yes do not return the review at index 1
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
