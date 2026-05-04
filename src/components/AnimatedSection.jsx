'use client';

import { motion } from 'framer-motion';

const variants = {
  'fade-up': { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  'fade-down': { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  'fade-left': { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  'fade-right': { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  'scale-up': { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  'zoom': { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } },
};

export default function AnimatedSection({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', variant = 'fade-up' }) {
  return (
    <motion.div className={className} variants={variants[variant]}>
      {children}
    </motion.div>
  );
}
