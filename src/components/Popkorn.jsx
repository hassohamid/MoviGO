export default function Popkorn({ start }) {
  return (
    <button onClick={start} className="start-button">
      Browse{" "}
      <img src="src/assets/popcorn.png" alt="Popcorn" className="popcorn" />
    </button>
  );
}
