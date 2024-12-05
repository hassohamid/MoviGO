import { PiUploadSimple } from "react-icons/pi";
import { MdOutlinePassword } from "react-icons/md";

const ProfileSettings = ({ toggleAvatar }) => (
  <div className="setting-container">
    <div className="settings">
      <button onClick={toggleAvatar} className="avatar-btn">
        <PiUploadSimple size={25} className="mr-1.5" /> Change your Avatar
      </button>
      <button className="update-btn">
        <MdOutlinePassword size={25} color="white" className="mr-1.5" /> Update
        Password
      </button>
    </div>
  </div>
);

export default ProfileSettings;
