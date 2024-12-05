export default function AvatarDashboard({
  changeAvatar,
  avatars,
  onAvatarChange,
}) {
  return (
    <section
      className={`flex flex-col items-center w-56 h-max rounded-l-lg p-1 bg-slate-900 absolute top-0 transition-all duration-500 ${
        changeAvatar ? "right-0" : "-right-64"
      }`}
    >
      <h2 className="text-white text-xl text-center w-full mt-5 font-bold">
        Change avatar:
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        {avatars.map((item) => (
          <img
            onClick={() => onAvatarChange(item.path)}
            key={item.id}
            className={`w-20 m-2 rounded-full drop-shadow-lg border border-black duration-500 transition-all box-border hover:scale-105 hover:border-red-500 cursor-pointer`}
            alt={`Avatar ${item.path}`}
            src={item.path}
          />
        ))}
      </div>
    </section>
  );
}
