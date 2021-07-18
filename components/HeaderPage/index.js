import { motion } from 'framer-motion';
import Link from 'next/link';
import { stagger, fadeInUp } from '../animate';

const HeaderPage = () => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="header"
        data-scroll-sticky
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <a>
              <h4 className="logo-text">Bayu Riyadi</h4>
            </a>
          </Link>
        </motion.div>
        <motion.div className="navbar" variants={stagger}>
          <ul>
            <motion.li variants={fadeInUp}>
              <Link href="/">
                <a>Back to Home</a>
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeaderPage;
