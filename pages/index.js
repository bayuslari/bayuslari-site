import Header from '../components/Header';
import { Hero } from '../components/Hero';
import { Socials } from '../components/Socials';
import Layout from '../components/layout';
import {motion} from 'framer-motion';
import ProjectSlider from '../components/ProjectSlider';
import fetch from "isomorphic-unfetch";
import About from '../components/About';
import Contact from '../components/Contact';

const Home = (props) => {
  return (
    <motion.div initial='initial' animate='animate' exit={{opacity: 0}} >
      <Layout title="Bayu Riyadi - Front-End Developer">
        <main>
          <Header></Header>
          <Socials></Socials>
          <div className="content">
            <Hero></Hero>
            <About></About>
            <ProjectSlider data={props.projects}></ProjectSlider>
            <Contact></Contact>
          </div>
        </main>
        <footer></footer>
      </Layout>
    </motion.div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://my-json-server.typicode.com/bayuslari/db/projects')
  const projects = await res.json()

  return {
    props: {
      projects
    },
  }
}

export default Home;