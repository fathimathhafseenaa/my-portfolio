import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Experience from '../../components/Experience/Experience';
import Videography from '../../components/Videography/Videography';
import Contact from '../../components/Contact/Contact';
import Stats from '../../components/Stats/Stats';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Experience />
            {/* <Videography /> */}
            <Contact />
        </div>
    );
};

export default Home;
