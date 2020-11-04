import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <section id="about" className="section-content">
        <div className="container">
          <div className="col-wrapper">
            <div className="col">
              <img className="profile-pic" src="/bayu.jpg" alt="profile-picture"/>
            </div>
            <div className="col about-content">
              <h2 className="display-4 m-b-20">Hi there!</h2>
              <p>I am Bayu S. Riyadi, a <span className="highlight">Front-End Developer</span> based on Yogyakarta, Indonesia with 5+ years of extensive experience in building high-quality sites.  My experiences range from build responsive sites that work well in cross-browser, do a web performance analysis, create unit test & E2E tests on JS apps and also develop web/mobile apps. </p>
              <p>I use HTML, CSS and Javascript. Though constantly changing, my focus right now is React.js, Gatsby and Next.js. I also use Mocha, Chai and Puppeteer to test apps.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About