let easing = [0.6, -0.05, 0.01, 0.99];

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

export const fadeInLeft = {
  initial: {
    x: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

export const fadeInLeftSlow = {
  initial: {
    x: 60,
    opacity: 0,
    transition: { duration: 2, ease: easing }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: easing
    }
  }
};

export const fadeInUpSlow = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 2, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: easing
    }
  }
};

export const fadeInRightSlow = {
  initial: {
    x: -120,
    opacity: 0,
    transition: { duration: 2, ease: easing }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: easing
    }
  }
};

export const fadeInRight3 = {
  initial: {
    x: -120,
    opacity: 0,
    transition: { duration: 2.5, ease: easing }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: easing
    }
  }
};

export const fadeInLeft3 = {
  initial: {
    x: 120,
    opacity: 0,
    transition: { duration: 2.5, ease: easing }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: easing
    }
  }
};