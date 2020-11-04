import fetch from "isomorphic-unfetch";
import Head from 'next/head';
import Layout from '../../components/layout';
import { motion } from 'framer-motion';
import HeaderPage from "../../components/HeaderPage";
import { Socials } from "../../components/Socials";
import Link from 'next/link';

const Project = props => {
  return (
    <motion.div initial='initial' animate='animate' exit={{opacity: 0}} >
      <Head>
        <title>{props.project.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Bayu Slari A FrontEnd Developer">
        <main>
          <HeaderPage></HeaderPage>
          <Socials></Socials>
          <div className="project-container">
            <div className="container">
              <img className="project-img" src={props.project.image} alt="project image"/>
              <div className="project-head">
                <h1 className="project-title">{props.project.name}</h1>
                <Link href={props.project.link}>
                  <a className="btn btn-yellow">VISIT THIS PROJECT</a>
                </Link>
              </div>
              <div
                className="project-desc"
                dangerouslySetInnerHTML={{
                  __html: props.project.content
              }}></div>
            </div>
          </div>
        </main>
      </Layout>
    </motion.div>
  );
}

Project.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://my-json-server.typicode.com/bayuslari/db/projects/${id}`
  );
  const project = await res.json();
  return { project };
};

export default Project;