export const marquee = {
    initial: {
      x: 0,
    },
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 1.5, // Increase the duration to make the animation slower
          ease: 'linear',
        },
      },
    },
  };


  export const animationSettings = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true }
};


export const pop = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        duration: 0.5,
        type: 'spring',
        bounce: 0.75,
        ease: [0.5, 1.51, 0.55, 0.89],
      },
      opacity: {
        duration: 0.5,
      },
    },
  },
}

export const parallaxSection = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}