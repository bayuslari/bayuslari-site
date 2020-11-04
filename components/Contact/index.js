import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <section id="contact" className="section-content">
        <div className="container">
          <h2 className="display-2 m-b-20">Let's work together!</h2>
          <Link href="mailto:bayuslari@gmail.com">
            <a className="btn btn-yellow">Email Me!</a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Contact