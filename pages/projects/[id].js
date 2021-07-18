import fetch from 'isomorphic-unfetch';
import Layout from '../../components/layout';
import { motion } from 'framer-motion';
import { Socials } from '../../components/Socials';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';

const isBrowser = () => typeof window !== 'undefined';

const Project = (props) => {
  const { project } = props;
  const onScroll = () => {
    if (window.pageYOffset > 50) {
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

  const router = useRouter();
  const pathname = `https://bayuslari.com${router.asPath}`;
  return (
    <motion.div
      className="detail-page"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Layout
        title={`Bayu Riyadi - ${project.name}`}
        canonical={pathname}
        description="Bayu Riyadi's Project"
      >
        <Header detail></Header>
        <Socials></Socials>

        <motion.div
          data-scroll-container
          className="project-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="container">
            <img
              className="project-img"
              src={project.image}
              alt="project image"
            />
            <div className="project-head">
              <h1 className="project-title">{project.name}</h1>
              <a href={project.link} className="btn btn-yellow">
                VISIT THIS PROJECT
              </a>
            </div>
            <div
              className="project-desc"
              dangerouslySetInnerHTML={{
                __html: project.content
              }}
            ></div>
          </div>
        </motion.div>
      </Layout>
    </motion.div>
  );
};

const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(
    `https://my-json-server.typicode.com/bayuslari/db/projects/${id}`
  );
  const project = await res.json();

  if (!project) {
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
      project
    }
  };
};

export default Project;
export { getServerSideProps };
