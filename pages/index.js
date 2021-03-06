import Header from '../components/header';
import { Hero } from '../components/hero';
import Layout from '../components/layout';
import { motion } from 'framer-motion';
import ProjectSlider from '../components/project-slider';
import fetch from 'isomorphic-unfetch';
import About from '../components/about';
import Contact from '../components/contact';
import { useEffect } from 'react';
import { Socials } from '../components/socials';

const isBrowser = () => typeof window !== 'undefined';

const Home = (props) => {
  const { projects } = props;
  const onScroll = () => {
    if (window.pageYOffset > 100) {
      document.querySelector('body').classList.add('scrolled');
    } else {
      document.querySelector('body').classList.remove('scrolled');
    }
  };
  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener('scroll', onScroll);
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const pathname = `https://bayuslari.com`;

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout
        title="Bayu Riyadi - Senior Front-End Developer"
        canonical={pathname}
        description="Senior Front-End Developer based on Yogyakarta, Indonesia with years of extensive experience in building high-quality sites. React JS lover."
      >
        <Header></Header>
        <Socials></Socials>
        <h1>{process.env.secondSecret}</h1>
        <div className="content" data-scroll-container>
          <Hero></Hero>
          <About></About>
          <ProjectSlider data={projects}></ProjectSlider>
          <Contact></Contact>
        </div>
      </Layout>
    </motion.div>
  );
};

const getServerSideProps = async () => {
  const res = await fetch(
    'https://my-json-server.typicode.com/bayuslari/db/projects'
  );
  const projects = await res.json();

  if (!projects) {
    return {
      props: {
        err: {
          statusCode: 404
        }
      }
    };
  }

  return {
    props: {
      projects
    }
  };
};

export default Home;
export { getServerSideProps };
