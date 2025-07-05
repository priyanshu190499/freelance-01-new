import Label from "../main/Label";
import Input from "../main/Input";
import {cn} from "../../lib/utils"

export default function FormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="relative left-0 w-[80%] md:w-[70%] lg:w-[40%] h-fit  bg-[rgba(0,0,0,0.5)] bshadow p-4 rounded-2xl md:p-8 ">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to <span className="text-primary">C</span>lips<span className="text-primary">M</span>unch
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        You are one step away to have the best edits of your content!
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Yash" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Verma" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="clipsmunch@.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="password">Contact</Label>
          <Input id="Contact" placeholder="91+1234567890" type="phone" />
        </LabelInputContainer>
        

      
        <button
          className="group/btn relative block h-10 w-full rounded-md font-medium text-white bg-primary bshadow transition-transform hover:scale-[1.03]"
          type="submit"
        >
          Book a Call &rarr;
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

       
      </form>
    </div>
  );
}

function LabelInputContainer({ children, className }) {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
}




