import { useEffect, useState } from "react";

const img = {
  0: "planet",
  1: "internal",
  2: "planet",
};

const content = {
  0: "overview",
  1: "structure",
  2: "geology",
};

const Planet = ({ data }) => {
  const [activeInfo, setActiveInfo] = useState(0);
  useEffect(() => {
    setActiveInfo(0);
  }, [data]);
  return (
    <div className="container p-4 mx-auto grid grid-cols-[1fr] items-center mt-20 text-white">
      {/* Planet img */}
      <div className="grid col-span-2 place-items-center relative">
        <img src={data.images[img[activeInfo]]} alt="" />
        {activeInfo === 2 && (
          <img
            className="absolute top-3/4"
            width={163}
            src={data.images.geology}
          />
        )}
      </div>
      {/* Planet info */}
      <div className="md:grid mt-10 md:grid-cols-[339px_auto] md:gap-[69px] md:mt-20">
        <div>
          <h2 className="uppercase text-7xl mb-6 font-anton">{data.name}</h2>
          <p className="text-sm mb-6 font-spartan">
            {data[content[activeInfo]].content}
          </p>
          <span className="opacity-50">
            Source :{" "}
            <a href={data[content[activeInfo]].source} className="underline">
              Wikipedia
            </a>
          </span>
        </div>
        <ul className="hidden mt-10 md:flex flex-col gap-4">
          <li
            onClick={() => setActiveInfo(0)}
            style={{ background: activeInfo === 0 ? data.color : "" }}
            className={` pl-7 font-spartan  cursor-pointer border border-[var(--border-color)] flex gap-7 pt-3 pb-[11px] font-bold uppercase`}
          >
            <span className="opacity-50">01</span> OVERVIEW
          </li>
          <li
            onClick={() => setActiveInfo(1)}
            style={{ background: activeInfo === 1 ? data.color : "" }}
            className={` pl-7  font-spartan cursor-pointer border border-[var(--border-color)] flex gap-7 pt-3 pb-[11px] font-bold uppercase`}
          >
            <span className="opacity-50">02</span> Internal Structure
          </li>
          <li
            onClick={() => setActiveInfo(2)}
            style={{ background: activeInfo === 2 ? data.color : "" }}
            className={` pl-7  font-spartan cursor-pointer border border-[var(--border-color)] flex gap-7 pt-3 pb-[11px] font-bold uppercase`}
          >
            <span className="opacity-50">03</span> Surface Geology
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Planet;
