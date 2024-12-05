import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

export default function RegisterForm({
  handleRegister,
  registerUsername,
  setRegisterUsername,
  registerPassword,
  setRegisterPassword,
  errorMessage,
  shake,
  successfulMessage,
}) {
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  return (
    <div className="h-96 w-[25rem] flex flex-col justify-between items-center p-5 gap-5 relative">
      <h1 className="text-3xl font-bold drop-shadow-md mt-4">Sign Up</h1>
      <h4 className="text-center font-medium drop-shadow-md">
        Enjoy the ultimate experience
      </h4>
      <input
        type="username"
        placeholder="Username"
        name="username"
        required
        className="inputs"
        onChange={(e) => handleInputChange(e, setRegisterUsername)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        className="inputs"
        onChange={(e) => handleInputChange(e, setRegisterPassword)}
      />
      <ErrorMessage errorMessage={errorMessage} shake={shake} />
      <SuccessMessage successfulMessage={successfulMessage} />
      <button className="create-button" onClick={handleRegister}>
        Create account
      </button>
    </div>
  );
}
