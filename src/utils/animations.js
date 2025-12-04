// Framer Motion Animation Presets
export const animations = {
  // Basic UI-friendly animations
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.25 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4 },
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 0.25 },
  },
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.25 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { duration: 0.25 },
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.25 },
  },

  // More dynamic animations
  pop: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { type: "spring", stiffness: 300 },
  },
  bounceIn: {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.3 },
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
  zoomOut: {
    initial: { opacity: 0, scale: 1.3 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.3 },
    transition: { duration: 0.3 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -15, scale: 0.8 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 15, scale: 0.8 },
    transition: { duration: 0.35 },
  },

  // Fun, attention-grabbing animations
  flip: {
    initial: { opacity: 0, rotateY: -90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: 90 },
    transition: { duration: 0.6 },
  },
  swing: {
    initial: { rotate: -10, opacity: 0 },
    animate: { rotate: [0, 10, -10, 5, -5, 0], opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.8 },
  },
  pulse: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: [1, 1.05, 1] },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.4 },
  },
  shake: {
    initial: { opacity: 0, x: -5 },
    animate: { opacity: 1, x: [0, -5, 5, -5, 0] },
    exit: { opacity: 0 },
    transition: { duration: 0.4 },
  },

  // Special entrance effects
  fadeScaleRotate: {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.8, rotate: 5 },
    transition: { duration: 0.4 },
  },
  blurIn: {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" },
    transition: { duration: 0.4 },
  },
  expandWidth: {
    initial: { opacity: 0, width: 0 },
    animate: { opacity: 1, width: "auto" },
    exit: { opacity: 0, width: 0 },
    transition: { duration: 0.3 },
  },
};
