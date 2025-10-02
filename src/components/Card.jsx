import React from "react";

// Card Component
const Card = ({ data }) => {
  if (!data) return null;

  const {
    rating,
    learnersText,
    image,
    tags = [],
    title,
    subtitle,
    meta = {},
  } = data;

  const { ageRange, durationMin, price, icons = {} } = meta;

  return (
    <div className="w-full cursor-pointer ">
      <div className="text-right pb-1">
        <span className="text-sm text-[#666666]">⭐ {rating} | {learnersText}</span>
      </div>

      <div
        className="rounded-2xl bg-white p-3 border transition-all duration-300 ease-in-out
          transform border-[#E4E4E4] hover:border-1 hover:border-blue-500  hover:shadow-[0_12px_40px_8px_rgba(59,130,246,0.18)]"
      >
        {/* image */}
        <img
          className="w-full max-w-[325px] rounded-3xl"
          src={image}
          alt={title || "card image"}
        />

        {/* tags */}
        <div className="flex gap-2 mt-3 flex-wrap">
          {tags.map((t) => (
            <span
              key={t.id}
              className="rounded-xl text-sm px-2 whitespace-nowrap"
              style={{
                border: `1px solid ${t.border}`,
                background: t.bg,
              }}
            >
              {t.text}
            </span>
          ))}
        </div>

        {/* title & subtitle */}
        <div className="text-left mt-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="font-medium text-md">{subtitle}</p>
        </div>

        {/* meta row */}
        <div className="flex justify-between mt-2">
          <div className="flex gap-2">
            {/* age */}
            <div className="flex gap-[5px] items-center">
              {icons.person && <img src={icons.person} alt="person" />}
              <span className="text-sm  whitespace-nowrap">{ageRange}</span>
            </div>

            {/* duration */}
            <div className="flex gap-[5px] items-center">
              {icons.clock && <img src={icons.clock} alt="clock" />}
              <span className="text-sm  whitespace-nowrap">{durationMin} min</span>
            </div>

            {/* price */}
            <div className="flex gap-[5px] items-center">
              {icons.rupee && <img src={icons.rupee} alt="rupee" />}
              <span className="text-sm">₹{price}</span>
            </div>
          </div>

          {/* cart */}
          <div>
            {icons.cart && <img src={icons.cart} alt="cart" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
