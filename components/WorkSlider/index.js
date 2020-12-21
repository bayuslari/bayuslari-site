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
                    <Link
                      key={work.id}
                      href='/works/[id]'
                      as={`/works/${work.id}`}
                    ><a className="btn">VIEW PROJECT</a></Link>
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

export default WorkSlider;
