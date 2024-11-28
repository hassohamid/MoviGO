import { useState } from "react";
export default function Login({
  onLogin,
  onInputChange,
  formData,
  errorMessage,
}) {
  if (!formData) {
    console.error("formData is undefined");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <section className="bg-gray-900 h-screen w-screen flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label
          className="text-white text-2xl font-extrabold drop-shadow-md"
          htmlFor="username"
        >
          Username
        </label>
        <input
          name="username"
          value={formData.username || ""}
          className="p-1 rounded-md shadow-sm drop-shadow-sm"
          id="username"
          type="text"
          placeholder="Username"
          required
          onChange={onInputChange}
        />

        <label
          className="text-white text-2xl font-extrabold drop-shadow-md"
          htmlFor="password"
        >
          Password
        </label>
        <input
          name="password"
          onChange={onInputChange}
          value={formData.password || ""}
          className="p-1 rounded-md shadow-sm drop-shadow-sm"
          id="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit" className="login-button">
          Login
        </button>
        {errorMessage && <h1 className="text-red-500">{errorMessage}</h1>}
      </form>
    </section>
  );
}
