import { motion } from 'framer-motion';
import { stagger, fadeInUpSlow, fadeInRight3, fadeInLeft3 } from './../animate';
import { Socials } from '../../components/Socials';

export const Hero = () => {
  return (
    <section id="hero" className="section-content" data-scroll-section>
      <motion.div variants={stagger} data-scroll data-scroll-position="hero">
        <motion.h6 variants={fadeInRight3}>I AM</motion.h6>
        <motion.h1 className="display-1" variants={fadeInUpSlow}>
          BAYU
        </motion.h1>
        <motion.h6 className="text-right" variants={fadeInLeft3}>
          A FRONT END DEVELOPER
        </motion.h6>
      </motion.div>
    </section>
  );
};
