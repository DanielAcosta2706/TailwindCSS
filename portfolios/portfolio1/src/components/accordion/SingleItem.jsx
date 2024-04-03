import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export const SingleItem = ({
  id,
  title,
  info,
  sub_title,
  start_date,
  end_date,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="relative mb-2 flex h-full basis-0 flex-wrap border-0 border-b-2 border-solid border-black">
      <div
        className={`${id === 1 ? "border-0" : "accordion-border"} mr-6 w-full`}
      >
        <p className="relative m-auto flex w-full items-center justify-between pl-6">
          <span className="items-center py-[30px] text-[21px] font-bold">
            {title}
          </span>
        </p>
        {expanded && (
          <div className="pl-[30px] pr-[50px]">
            <span className="flex items-center justify-between">
              <p className="caveat m-0 text-[28px] font-bold leading-10">
                {sub_title}
              </p>
              <span className="flex items-center gap-x-1">
                <p className="m-0 text-[13px] font-bold">{start_date}</p>-
                <p
                  className={`${end_date === "PRESENT" && "text-[#29a587]"} m-0 text-[13px] font-bold`}
                >
                  {end_date}
                </p>
              </span>
            </span>
            <p className="relative pb-[30px] pt-[15px] text-justify leading-8 text-[#262626] dark:text-white">
              {info}
            </p>
          </div>
        )}
        <span
          className="shadowbtn absolute -bottom-6 right-0 z-10 rounded-full border-2 border-black"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <button
            className={`${expanded ? "bg-[#f0ebe3] " : "bg-white"} flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold`}
          >
            {expanded ? <FiMinus /> : <FiPlus />}
          </button>
        </span>
      </div>
    </article>
  );
};
