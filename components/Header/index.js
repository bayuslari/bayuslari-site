import { motion } from 'framer-motion';
import Link from 'next/link';
import { stagger, fadeInUp } from './../animate';

const Header = () => {
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
            <a>
              <h3 className="logo-text">Bayu Riyadi</h3>
            </a>
          </Link>
        </motion.div>
        <motion.div className="navbar" variants={stagger}>
          <ul>
            <motion.li variants={fadeInUp}>
              <Link href='#about'>
                <a>About</a>
              </Link>
            </motion.li>
            <motion.li variants={fadeInUp}>
              <Link href='#projects'>
                <a>Projects</a>
              </Link>
            </motion.li>
            <motion.li variants={fadeInUp}>
              <Link href='#contact'>
                <a>Contact</a>
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;