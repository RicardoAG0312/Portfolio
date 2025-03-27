//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, direction = "left" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const getAnimation = () => {
    switch (direction) {
      case "left":
        return { initial: { opacity: 0, x: -100 }, animate: inView ? { opacity: 1, x: 0 } : {} };
      case "right":
        return { initial: { opacity: 0, x: 100 }, animate: inView ? { opacity: 1, x: 0 } : {} };
      case "top":
        return { initial: { opacity: 0, y: -50 }, animate: inView ? { opacity: 1, y: 0 } : {} };
      case "bottom":
        return { initial: { opacity: 0, y: 50 }, animate: inView ? { opacity: 1, y: 0 } : {} };
      default:
        return { initial: { opacity: 0 }, animate: inView ? { opacity: 1 } : {} };
    }
  };

  return (
    <motion.div ref={ref} {...getAnimation()} transition={{ duration: 0.7, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;




