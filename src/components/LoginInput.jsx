export default function LoginInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-white text-2xl font-extrabold drop-shadow-md">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-1 rounded-md shadow-lg"
      />
    </div>
  );
}
