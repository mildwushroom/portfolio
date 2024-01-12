import { BrowserRouter } from "react-router-dom";
import Hero from './components';
// import components: About, contact, experience, feedbacks, hero, navbar, tech, works, starsCanvas

const App = () => {
  return (
    <BrowserRouter>
      <div className="Card">
        <div>
          <h1>Hi there! I am Cristina.</h1>
          {/* pick a NavBar then follow up and watch video */}
          <Hero/>
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
