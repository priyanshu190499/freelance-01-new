import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <>
    
    <header
   className={`fixed top-0 left-0 w-[100vw] z-50 border border-b-bl 
  transition-all duration-500 ease-in-out 
  ${isScrolled 
    ? "opacity-0 -translate-y-5 pointer-events-none bg-[rgba(0,0,0,0.5)]"
    : "opacity-100 translate-y-0 pointer-events-auto bg-[rgba(0,0,0,0.9)]"
  }
`}


    >
      <div className="max-w-7xl mx-auto flex justify-between items-center  py-6">
        {/* Logo */}
        <div className="text-white font-bold text-4xl"><span className="text-primary">C</span>lips<span className="text-primary">M</span>unch</div>

       

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-8 h-6 focus:outline-none z-50"
        >
          <span
            className={`block h-0.5 bg-primary transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-white transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-primary transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        
        </button>
      </div>

      {/* Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 md:w-1/3 bg-[rgba(0,0,0,0.7)] text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center space-y-8 p-6 font-bold text-xl">
          <a href="#" onClick={() => setIsOpen(false)}>SERVICES</a>
          <a href="#" onClick={() => setIsOpen(false)}>CASE STUDIES</a>
          <a href="#" onClick={() => setIsOpen(false)}>WORK BY INDUSTRY</a>
          <a href="#" onClick={() => setIsOpen(false)}>DIGITAL TRENDS</a>
          <a href="#" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#" onClick={() => setIsOpen(false)}>CONTACT</a>
          <button className="border border-bl px-4 py-2 w-fit">
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </header>
    </>
  );
}
