export default function ErrorMessage({ errorMessage, shake }) {
  if (!errorMessage) return null;

  return (
    <p
      className={`${shake ? "error-message-shake" : ""} error-message`}
      onAnimationEnd={() => setShake(false)}
    >
      {errorMessage}
    </p>
  );
}
