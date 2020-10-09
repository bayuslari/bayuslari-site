import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const WorkSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '33.33333%',
    arrows: false
  };

  const slideData = [
    {
      index: 0,
      headline: 'New Fashion',
      button: 'Shop now',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg',
      desc: 'Nostrud sit consectetur reprehenderit ipsum dolore mollit aliqua esse ex labore id ex ex sunt. '
    },
    {
      index: 1,
      headline: 'The Wilderness',
      button: 'Book travel',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
      desc: 'Non ullamco ad aliqua sunt. Pariatur pariatur aliquip deserunt cupidatat aliquip mollit eiusmod sit eu.'
    },
    {
      index: 2,
      headline: 'Current Mood',
      button: 'Listen',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
      desc: 'Occaecat ullamco fugiat laborum duis in veniam cupidatat aliquip proident sunt esse est deserunt sunt.'
    },
    {
      index: 3,
      headline: 'The Writing',
      button: 'Get Focused',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
      desc: 'Exercitation eu nulla in anim sit aliqua adipisicing nisi cillum deserunt. Voluptate non elit veniam adipisicing.'
    }
  ];

  const works =  props.data;
  return (
    <>
      <section id="works" className="section-content">
        <div className="container">
          <Slider {...settings}>
            {works.map((work) => {
              return (
                <div className="work-content" key={work.id}>
                  <img alt="image" src={work.image} />
                  <div className="work-text">
                    <h2>{work.name}</h2>
                    <p>{work.excerpt}</p>
                    <Link href='#'><a className="btn">VIEW PROJECT</a></Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://my-json-server.typicode.com/bayuslari/db/works')
//   const posts = await res.json()

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default WorkSlider;
