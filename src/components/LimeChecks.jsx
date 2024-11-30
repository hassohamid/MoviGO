import { FaCheck } from "react-icons/fa";
export default function LimeChecks() {
  const limes = [
    {
      id: 1,
      description: "Get personalized movie recommendations.",
    },
    {
      id: 2,
      description: "Track your favorite films and watch history.",
    },
    {
      id: 3,
      description: "Easily find where to stream your movies.",
    },
  ];
  return (
    <section className="flex flex-col items-start justify-center mt-10 w-[400px]">
      {limes.map((item, i) => (
        <div key={i} className="flex flex-row-reverse items-center gap-2">
          <p className="text-white text-[1.2rem] font-[500] tracking-tight my-1">
            {item.description}
          </p>
          <FaCheck color="lime" />
        </div>
      ))}
    </section>
  );
}
