import { BrowserRouter } from "react-router-dom";
import Hero from './components/Hero.jsx';
import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Tech from './components/Tech.jsx'
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
      <div className="Card">
          <Hero/>
          <h1>Hi! I&#39;m Cristina.</h1>
          <p>Under construction<span role="img" aria-label="rocket"> 🚀 </span>Expect changes frequently!</p>
          {/* <i>(Hint: Interact with Kirby)</i> */}

        <div>
          {/* pick a NavBar then follow up and watch video */}
        </div>
        {/* render the rest of the sections */}
          <About/>
          <Experience/>
          <Tech/>
        <div>
          {/* render contact */}
          {/* render starscanvas */}
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
