import Header from '../components/Header';
import { Hero } from '../components/Hero';
import { Socials } from '../components/Socials';
import Layout from '../components/layout';
import {motion} from 'framer-motion';
import WorkSlider from '../components/WorkSlider';
import fetch from "isomorphic-unfetch";

const Home = (props) => {
  return (
    <motion.div initial='initial' animate='animate' exit={{opacity: 0}} >
      <Layout title="Bayu Slari A FrontEnd Developer">
        <main>
          <Header></Header>
          <Socials></Socials>
          <div className="content">
            <Hero></Hero>
            <WorkSlider data={props.works}></WorkSlider>
          </div>
        </main>
        <footer></footer>
      </Layout>
    </motion.div>
  );
};

// Home.getStaticProps = async function() {
//   const res = await fetch(
//     "https://my-json-server.typicode.com/bayuslari/db/works"
//   );
//   const data = await res.json();
//   return {
//     works: data
//   };
// };

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://my-json-server.typicode.com/bayuslari/db/works')
  const works = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      works
    },
  }
}

export default Home;