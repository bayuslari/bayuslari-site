import { motion } from 'framer-motion';
import { stagger, fadeInUpSlow } from './../animate';

export const Hero = () => {
  return (
    <section id="hero" className="section-content">
      <motion.div variants={stagger}>
        <motion.h6 variants={fadeInUpSlow}>I AM</motion.h6>
        <motion.h1 className="display-1" variants={fadeInUpSlow}>BAYU</motion.h1>
        <motion.h6 className="text-right" variants={fadeInUpSlow}>A FRONT END DEVELOPER</motion.h6>
      </motion.div>
    </section>
  );
};
