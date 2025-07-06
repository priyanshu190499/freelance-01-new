import { StickyScroll } from "../main/StickyScroll";
import Title from "../main/Title"
import b1 from "../../assets/blue-1.webp"
import b2 from "../../assets/blue-2.jpg"
import b3 from "../../assets/blue-3.jpg"
import b4 from "../../assets/blue-4.jpg"
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white">
       <img src={b1} className="h-full w-full" />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
         <img src={b2} className="h-full w-full" />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-500 text-white">
        <img src={b3} className="h-full w-full" />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white">
      <img src={b4} className="h-full w-full" />
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full dark:bg-black py-16">
        <Title t1={"Our Exclusive "} t2={"Features for Customers"} />
      <StickyScroll content={content} />
    </div>
  );
}
