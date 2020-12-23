import fetch from "isomorphic-unfetch";
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import { motion } from 'framer-motion';

const Work = props => {
  const {work} = props;
  return (
    <motion.div exit={{opacity: 0}}>
		<Layout>
      <Head>
        <title>{work.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container detail-container">
        <Link href="/">
          <a className="backtohome">Back to home</a>
        </Link>
        <div className="image-holder">
          <img src={work.image} alt=""></img>
        </div>
        <div className="content-holder">
          <h1>{work.name}</h1>
          <div dangerouslySetInnerHTML={{__html: work.content}} />
        </div>    
      </div>
			</Layout>
    </motion.div>
  );
}

Work.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://my-json-server.typicode.com/bayuslari/db/projects/${id}`
  );
  const work = await res.json();
  return { work };
};

export default Work;