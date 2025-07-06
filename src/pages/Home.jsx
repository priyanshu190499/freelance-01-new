import ThreeDMarqueeDemo from "../components/wrapper/ThreeDMarqueeWrapper"
import TimelineDemo from "../components/wrapper/TimelineWrapper"
import InfiniteMovingCardsDemo from "../components/wrapper/InfiniteMovingCardsWrapper"
import PointerHighlightDemo from "../components/wrapper/PointerHighlightWrapper"
import WavyBackgroundDemo from "../components/wrapper/WavyBackgroundWrapper"
import GlowingEffectDemoSecond from "../components/wrapper/GlowingEffectWrapper"
import StepperWithContent from "../components/main/Stepper"
import StickyScrollRevealDemo from "../components/wrapper/StickyScrollWrapper"
const Home = () => {
  return (
    <>
    <WavyBackgroundDemo/>
    <GlowingEffectDemoSecond/>
  <StepperWithContent/>
    <StickyScrollRevealDemo/>
  
    <InfiniteMovingCardsDemo/>
    <TimelineDemo/>
  <PointerHighlightDemo/>
  <ThreeDMarqueeDemo/>
 
    </>
  )
}

export default Home