const PlanetFacts = ({ rotation, revolution, radius, temperature }) => {
  return (
    <div className="text-white p-2  mt-20 grid gap-[30px] md:gap-[11px]  grid-cols-1 md:grid-cols-4 grid-rows-[128px] container mx-auto pb-14">
      <div className="border border-[var(--border-color)] px-6 py-5">
        <span className="opacity-50 font-spartan text-sm tracking-wide font-bold">
          ROTATION TIME
        </span>
        <p className="md:text-2xl text-4xl uppercase font-anton">{rotation}</p>
      </div>
      <div className="border border-[var(--border-color)] px-6 py-5">
        <span className="opacity-50 font-spartan text-sm tracking-wide font-bold">
          REVOLUTION TIME
        </span>
        <p className="md:text-2xl  text-4xl uppercase font-anton">
          {revolution}
        </p>
      </div>

      <div className="border border-[var(--border-color)] px-6 py-5">
        <span className="opacity-50 font-spartan uppercase text-sm tracking-wide font-bold">
          radius
        </span>
        <p className="md:text-2xl  text-4xl uppercase font-anton">{radius}</p>
      </div>
      <div className="border border-[var(--border-color)] px-6 py-5">
        <span className="opacity-50 font-spartan text-sm tracking-wide font-bold">
          AVERAGE TEMP.
        </span>
        <p className="md:text-2xl  text-4xl uppercase font-anton">
          {temperature}
        </p>
      </div>
    </div>
  );
};

export default PlanetFacts;
