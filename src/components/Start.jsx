import { AnimatedBackground } from "animated-backgrounds";
export default function Start({ start }) {
  return (
    <section className="my-5 w-[400px] flex flex-col gap-5 items-center">
      <AnimatedBackground animationName="auroraBorealis" blendMode="lighten" />
      <article className="text-center text-white text-5xl font-extrabold drop-shadow-md">
        Welcome to ...{" "}
      </article>
      <p className="text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam ea
        dolore, quidem obcaecati repellat ipsa aliquam incidunt hic dolorum
        optio amet, modi ipsum omnis.
      </p>
      <button onClick={start} className="start-button">
        Let's start
      </button>
    </section>
  );
}
