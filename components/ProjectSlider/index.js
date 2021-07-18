import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const ProjectSlider = (props) => {
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}></div>;
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}></div>;
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerPadding: '33.33333%',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: '0'
        }
      }
    ]
  };

  const projects = props.data;
  return (
    <>
      <section id="projects" className="section-content" data-scroll-section>
        <div className="container" data-scroll data-scroll-position="projects">
          <Slider {...settings}>
            {projects.map((project) => {
              return (
                <div className="project-content" key={project.id}>
                  <img alt="image" src={project.image} />
                  <div className="project-text">
                    <h2>{project.name}</h2>
                    <div
                      className="project-excerpt"
                      dangerouslySetInnerHTML={{
                        __html: project.content
                      }}
                    ></div>
                    <Link
                      key={project.id}
                      href="/projects/[id]"
                      as={`/projects/${project.id}`}
                    >
                      <a className="btn">VIEW PROJECT</a>
                    </Link>
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

export default ProjectSlider;
