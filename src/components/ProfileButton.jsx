export default function ProfileButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="border border-black px-4 rounded-md my-5 shadow-md hover:scale-105 transition-all duration-200 "
    >
      {children}
    </button>
  );
}
