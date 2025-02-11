import About from "./Components/About/About";
import Certifications from "./Components/Certifications/Certifications";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
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
      <section id="projectssection">
        <Projects />
      </section>
      <section id="aboutsection">
        <About />
      </section>
      <section id="certificationssection">
        <Certifications />
      </section>
      <section id="contactsection">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
