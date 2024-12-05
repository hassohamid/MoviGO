import AvatarDashboard from "./AvatarDashboard";

const AvatarSelector = ({ avatars, changeAvatar, onAvatarChange }) => (
  <AvatarDashboard
    avatars={avatars}
    changeAvatar={changeAvatar}
    onAvatarChange={onAvatarChange}
  />
);

export default AvatarSelector;
