import {useRef} from "react"
import { motion, useInView } from "framer-motion";
import { HeroHighlight, Highlight } from "../main/HeroHighlight";

export default function HeroHighlightDemo({t1,t2}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Only run the animation once
    amount: 0.5, // 50% of element in view
  });

  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold  text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        {t1}{" "}
        <span ref={ref}>
          <Highlight
            isInView={isInView} // Pass the state down
            className="text-black dark:text-white"
          >
            {t2} 
          </Highlight>
         
        </span>
        
      </motion.h1>
      
    </HeroHighlight>
  );
}
