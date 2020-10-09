import fetch from "isomorphic-unfetch";
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import { motion } from 'framer-motion';

const Work = props => {
  return (
    <motion.div exit={{opacity: 0}}>
		<Layout>
      <Head>
        <title>{props.work.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="post-container">
        <div>
          <h1>{props.work.id}</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </div>
      </div>
			</Layout>
    </motion.div>
  );
}

Work.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://my-json-server.typicode.com/bayuslari/db/works/${id}`
  );
  const work = await res.json();
  return { work };
};

export default Work;