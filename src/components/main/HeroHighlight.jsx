
import { useMotionValue, motion } from "framer-motion";


const cn = (...classes) => classes.filter(Boolean).join(" ");

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className={cn(
        "group relative flex w-full ",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Light pattern default */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        
      />

      {/* Dark pattern default */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
      
      />

      {/* Light pattern hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden"
        
      />

      {/* Dark pattern hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block"
        
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({ children, className, isInView }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: isInView ? "100% 100%" : "0% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r px-1 pb-1 dark:from-primary dark:to-secondary`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
