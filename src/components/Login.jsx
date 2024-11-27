export default function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <section className="bg-slate-400 h-screen w-screen flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Username" required />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" required />

        <button type="submit" className="login-button border border-black p-1">
          Login
        </button>
      </form>
    </section>
  );
}
