import { BrowserRouter } from "react-router-dom";
import Hero from './components/Hero.jsx';
import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Tech from './components/Tech.jsx'
import Footer from './components/Footer.jsx'
import Contact from "./components/Contact.jsx";
import { Stars } from "@react-three/drei";
import StarsCanvas from "./components/canvas/StarsCanvas.jsx";
// import components: About, contact, experience, feedbacks, hero, navbar, tech, works, starsCanvas

const App = () => {

  const calculateTimeLeft = (expirationTime) => {
    const now = new Date();
    const difference = expirationTime - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
  };

  const expirationTime = new Date('2024-01-22T23:59:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(expirationTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(expirationTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [expirationTime]);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
          {/* <Footer/> */}
      </div>
    </BrowserRouter>
  )
};

export default App;
