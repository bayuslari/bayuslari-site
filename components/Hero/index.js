import { motion } from 'framer-motion';
import { stagger, fadeInUpSlow, fadeInRight3, fadeInLeft3 } from './../animate';

export const Hero = () => {
  return (
    <section id="hero" className="section-content" data-scroll-section>
      <motion.div variants={stagger} data-scroll data-scroll-position="hero">
        <motion.h2 className="h6" variants={fadeInRight3}>
          I AM
        </motion.h2>
        <motion.h2 className="display-1" variants={fadeInUpSlow}>
          BAYU
        </motion.h2>
        <motion.h2 className="text-right h6" variants={fadeInLeft3}>
          A FRONT END DEVELOPER
        </motion.h2>
      </motion.div>
    </section>
  );
};
