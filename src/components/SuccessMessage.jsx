export default function SuccessMessage({ successfulMessage }) {
  if (!successfulMessage) return null;

  return <p className="success-message">{successfulMessage}</p>;
}
