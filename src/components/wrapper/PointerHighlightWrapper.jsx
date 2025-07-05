
import {PointerHighlight} from "../main/PointerHighlight"; 
import Title from "../main/Title";

export default function PointerHighlightDemo() {
  const data=[
    {
      highlightTitle:"collab tool",
      title:"of the century with max benefits and minimal effort.",
      description:" Our state of the art collab tool of the century with max benefits."
    },
     {
      highlightTitle:"collab tool",
      title:"of the century with max benefits and minimal effort.",
      description:" Our state of the art collab tool of the century with max benefits."
    },
     {
      highlightTitle:"collab tool",
      title:"of the century with max benefits and minimal effort.",
      description:" Our state of the art collab tool of the century with max benefits."
    },
     {
      highlightTitle:"collab tool",
      title:"of the century with max benefits and minimal effort.",
      description:" Our state of the art collab tool of the century with max benefits."
    },
     {
      highlightTitle:"collab tool",
      title:"of the century with max benefits and minimal effort.",
      description:" Our state of the art collab tool of the century with max benefits."
    },
     {
      highlightTitle:"collab tool",
      title:"of the century with max benefits and minimal effort.",
      description:" Our state of the art collab tool of the century with max benefits."
    },
  ]
  return (
    <div className="dark:bg-black py-16">
     <Title t1={"Who's This"} t2={"Subsciption For"} />
      <div className="mx-auto grid max-w-7xl bg-[rgba(255,255,255,0.1)] p-4 grid-cols-1 gap-4 bshadow rounded-xl sm:grid-cols-3">
      
      {data.map((item, i)=>{
        return (
          <div key={i} className="rounded-md p-6 border dark:bg-black border-bl">
        <div className="h-40 w-full rounded-lg bg-gradient-to-r from-blue-200 to-sky-200" />
        <div className="mx-auto mt-4 max-w-lg text-base font-bold text-white tracking-tight md:text-base">
          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10 text-primary">{item.highlightTitle}</span>
          </PointerHighlight>
          {item.title}
        </div>
        <p className="mt-4 text-sm text-neutral-500">
         {item.description}
        </p>
      </div>
        )
      })}

     
    </div>
    </div>
  );
}
