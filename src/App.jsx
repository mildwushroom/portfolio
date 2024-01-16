import { BrowserRouter } from "react-router-dom";
import Hero from './components/Hero.jsx';
// import components: About, contact, experience, feedbacks, hero, navbar, tech, works, starsCanvas

const App = () => {
  return (
    <BrowserRouter>
      <div className="Card">
          <Hero/>
          <h1>Hi! Im Cristina.</h1>
        <div>
          {/* pick a NavBar then follow up and watch video */}
        </div>
        {/* render the rest of the sections */}
        <div>
          {/* render contact */}
          {/* render starscanvas */}
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
