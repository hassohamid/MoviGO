import { createContext, useContext, useState, useEffect } from "react";
const AvatarContext = createContext();

export default function AvatarProvider({ children }) {
  const [currentAvatar, setCurrentAvatar] = useState(() => {
    const savedAvatar = localStorage.getItem("currentAvatar");
    return savedAvatar || "src/assets/1.png";
  });

  useEffect(() => {
    localStorage.setItem("currentAvatar", currentAvatar);
  }, [currentAvatar]);
  return (
    <AvatarContext.Provider value={{ currentAvatar, setCurrentAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
}

export function useAvatar() {
  return useContext(AvatarContext);
}
