'use client';
import { motion } from 'motion/react';

export const TextHoverEffect = ({ text }: { text: string }) => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 300 100'
      xmlns='http://www.w3.org/2000/svg'
      className='select-none'
    >
      <motion.text
        x='50%'
        y='50%'
        textAnchor='middle'
        dominantBaseline='middle'
        strokeWidth='0.3'
        className='fill-transparent stroke-neutral-200 font-bricolage-grotesque text-base font-bold dark:stroke-neutral-800'
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
        }}
      >
        {text}
      </motion.text>
      <motion.text
        x='50%'
        y='50%'
        textAnchor='middle'
        dominantBaseline='middle'
        strokeWidth='0'
        className='font-bricolage-grotesque text-base font-bold fill-white dark:fill-white'
        initial={{ fillOpacity: 0 }}
        animate={{
          fillOpacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: 'easeInOut',
        }}
      >
        {text}
      </motion.text>
    </svg>
  );
};
