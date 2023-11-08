import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const Feedbackform = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText,setReviewText] = useState("");

  const handleSubmitbutton = async e =>{
    e.preventDefault()
  }
  

  return (
    <form action="">
      <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
          How would you rate the overall experience?
        </h3>

        <div>
          {[...Array(5).keys()].map((index) => (
            <button
              key={index}
              type="button"
              className={`${index <= rating || index <= hover ? "text-yellowcolor" : "text-gray-400"} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
              onClick={() => setRating(index + 1)}
              onMouseEnter={() => setHover(index + 1)}
              onMouseLeave={() => setHover(0)}
              onDoubleClick={() => {
                setRating(0);
                setHover(0);
              }}
            >
              <span>
                <AiFillStar />
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className='mt-[30px]'>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
          Share your feedback or suggestions
        </h3>

        <textarea className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor 
        w-ful px-4 py-3 rounded-md" rows="5" placeholder='Write your message'
        onChange={()=>setReviewText(e.target.value)}></textarea>
      </div>

      <button type="submit" className='btn' onClick= {handleSubmitbutton}>Submit Feedback</button>
    </form>
  );
};

export default Feedbackform;
