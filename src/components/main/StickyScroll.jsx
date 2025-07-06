import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";


export function StickyScroll({ content, contentClassName }) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div
      className={cn(
        "relative flex flex-col-reverse justify-center gap-12 lg:flex-row  backdrop-blur-lg  overflow-hidden",
        "h-[30rem] lg:h-[30rem]" // full height on desktop, auto on mobile
      )}
    >

          {/* Content container */}
      <motion.div
        animate={{ backgroundColor: ["black","black", "black"] }}
        ref={ref}
        className={cn(
          "flex overflow-y-auto p-10 scrollbar-thin scrollbar-thumb-primary  scrollbar-track-transparent"
        )}
      >
        <div className="max-w-2xl ">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-primary bshadow"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </motion.div>



      {/* Gradient container */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "w-full h-60 lg:sticky lg:top-10 lg:h-60 lg:w-80 flex-shrink-0 overflow-hidden rounded-2xl  ",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>

    
    </div>
  );
}
