
const Partners = ({marqueeData}) => {
 
  return (
   <div className="relative max-w-xl  overflow-hidden py-4 group bg-transparent">
  {/* Left shadow fade */}
  <div className="pointer-events-none absolute top-0 left-0 h-full w-1/3 z-10 bg-gradient-to-r from-black to-transparent"></div>

  {/* Right shadow fade */}
  <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 z-10 bg-gradient-to-l from-black to-transparent"></div>

  <div className="relative w-full overflow-hidden">
    <div className="marquee-track flex items-center gap-24">
      {marqueeData.map((name, i) => (
      
        <img
          key={i}
          src={`https://demoxml.com/wp/darkyn/wp-content/uploads/2025/03/${name}.png`}
          alt={name}
          className="h-8 w-auto flex-shrink-0"
        />
       
        
      ))}
    </div>
  </div>
</div>


  )
}

export default Partners