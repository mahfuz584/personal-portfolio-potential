export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.8,
    },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 3,
      ease: [0.22, 1, 0.36, 1],
      duration: 1.5,
    },
  },
};
