import  { useEffect, useRef, useState } from "react";
import quote from "../../assets/quote.png"
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((t) => (
          <li
            key={t.name}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-1 py-1 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
          >
             <div className=" w-full ">
                      
                        <div
                         
                          className="relative rounded-2xl p-6  max-w-full bg-[#1a1a1a] border border-[#333] overflow-hidden  "
                        >
                          {/* Top Header */}
                          <div className="flex items-center gap-3 mb-6 ">
                            <img src={quote} alt="quote" className="w-6 h-6 " />
                            <h4 className="text-lg font-semibold text-white">{t.name}</h4>
                          </div>
            
                          {/* Divider */}
                          <hr className="border-t border-[#444] mb-6" />
            
                          {/* Image + Text */}
                          <div className="flex items-start gap-4 z-2">
                            <img
                              src={t.img}
                              alt={t.name}
                              className="w-36 h-36 object-cover rounded-md bg-gray-950"
                            />
                            <p className="text-lg text-white/90 leading-relaxed">
                              {t.text}
                            </p>
                          </div>
            
                               {/* Moving Glass Effect */}
            
            
            
            
            
                          
                        </div>
                      
                    </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
