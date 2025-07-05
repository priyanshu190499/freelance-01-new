
import { InfiniteMovingCards } from "../main/InfiniteMovingCards";
import Title from "../main/Title";
import { testimonials } from "../../lib/staticData";
export default function InfiniteMovingCardsDemo() {
  return (
    <div className=" flex flex-col antialiased bg-white dark:bg-black py-16 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
     <Title t1={"Checkout Our"} t2={"Testimonials"}/>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
