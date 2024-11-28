export default function Profile({ formData = { username: "" } }) {
  const { username } = formData;
  return (
    <section>
      <h1>Welcome back, {username}!</h1>
    </section>
  );
}
