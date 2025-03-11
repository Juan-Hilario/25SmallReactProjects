import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(numOfStars)].map((_, index) => {
        return (
          <FaStar
            //for every position in the array, a class name is associated with it based on it index in relation tothe hover and rating address
            className={
              index <= rating
                ? "active"
                : index === hover || (index > rating && index < hover)
                  ? "hover"
                  : "inactive"
            }
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
