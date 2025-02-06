import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <section id="homesection">
        <Home />
      </section>
      <Projects />
      <section id="aboutsection">
        <About />
      </section>
      <section id="contactsection">
        <Contact />
      </section>
    </div>
  );
};

export default App;
