import { Meteors } from "../main/MeteorCard";

export default function MeteorsDemo({title,description}) {
  return (
    
      <div className="relative w-full max-w-4xl">
        {/* Background Gradient Blur */}
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full" />

        {/* Content Box */}
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 bshadow">
          
          {/* Little circle icon */}
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
           {title}
          </h1>

          {/* Description */}
          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
           {description}
          </p>

          {/* CTA Button */}
          <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
            Explore
          </button>

          {/* 🌠 Meteor Effect */}
          <Meteors number={20} />
        </div>
      </div>
    
  );
}
