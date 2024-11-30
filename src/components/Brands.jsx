import { SiAppletv } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { SiPrimevideo } from "react-icons/si";
import { SiHbo } from "react-icons/si";
import { FaDisplay } from "react-icons/fa6";

export default function Brands() {
  return (
    <div className="brands">
      <FaDisplay size={40} className="platform" />
      <SiAppletv color="white" size={50} className="brand" />
      <RiNetflixFill color="red" size={50} className="brand" />
      <SiPrimevideo color="skyblue" size={50} className="brand" />
      <SiHbo color="white" size={50} className="brand" />
    </div>
  );
}
