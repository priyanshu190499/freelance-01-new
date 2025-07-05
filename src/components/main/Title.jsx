import HeroHighlightDemo from "../wrapper/HeroHighlightWrapper"

const Title = ({t1,t2}) => {
  return (
      
   <div className=" pb-24 md:py-12 sm:py-12  flex justify-center items-center ">
  <div className=" relative w-7xl inline-block">
    
    <HeroHighlightDemo t1={t1} t2={t2}/>

    {/* <span className="absolute inset-0 top-full mx-auto h-0.5 w-full bg-gradient-to-r from-[#240b36] to-[#c31432] "></span> */}
  </div>
</div>

  )
}

export default Title