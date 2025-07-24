// components/FadeInWhenVisible.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeInWhenVisible({ children, delay = 0 }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // cubic bezier for smooth feel
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
