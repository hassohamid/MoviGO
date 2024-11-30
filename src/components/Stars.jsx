import { AiFillStar } from "react-icons/ai";
export default function Stars() {
  const countStars = 5;
  return (
    <div className="stars">
      {[...Array(countStars)].map((_, i) => (
        <AiFillStar key={i} color="gold" size="30px" className="star-icon" />
      ))}
    </div>
  );
}
