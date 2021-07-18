import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContext } from 'react';
import { SmoothScrollContext } from '../scroll';
import { stagger, fadeInUp } from './../animate';

const Header = () => {
  const { scroll } = useContext(SmoothScrollContext);
  const scrollToSection = (e, props) => {
    e.preventDefault();
    scroll && scroll.scrollTo(props);
  };
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="header"
      >
        <motion.div variants={fadeInUp}>
          <Link href="/">
            <a onClick={(e) => scrollToSection(e, '#hero')}>
              <h1 className="logo-text">Bayu Riyadi</h1>
            </a>
          </Link>
        </motion.div>
        <motion.div className="navbar" variants={stagger}>
          <ul>
            <motion.li variants={fadeInUp}>
              <Link href="#about">
                <a onClick={(e) => scrollToSection(e, '#about')}>About</a>
              </Link>
            </motion.li>
            <motion.li variants={fadeInUp}>
              <Link href="#projects">
                <a onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
              </Link>
            </motion.li>
            <motion.li variants={fadeInUp}>
              <Link href="#contact">
                <a onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;
