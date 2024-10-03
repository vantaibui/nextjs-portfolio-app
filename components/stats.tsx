"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 2,
    text: "Projects completed",
  },
  {
    num: 2,
    text: "Technologies mastered",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
              <CountUp className="text-4xl xl:text-6xl font-extralight" end={stat.num} duration={5} delay={2} />
              <p className={`${stat.text.length < 15 ? "max-w=[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
