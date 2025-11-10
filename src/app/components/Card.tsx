import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { CMS } from '../types';

const Card = ({
  cms,
  isActive,
  onClick,
}: {
  cms: CMS;
  isActive: boolean;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 8;
      const rotateX = ((centerY - y) / centerY) * 8;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${cms.id}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      animate={{ scale: isActive ? 1.07 : 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        width: 280,
        height: 180,
        borderRadius: 20,
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: isActive
          ? '0 16px 32px rgba(0,0,0,0.25)'
          : '0 8px 20px rgba(0,0,0,0.12)',
        transformStyle: 'preserve-3d',
      }}
    >
      <Image
        src={cms.image}
        alt={cms.name}
        fill
        style={{ objectFit: 'cover' }}
        priority={isActive}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${cms.color}cc 30%, ${cms.color}4d 100%)`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex justify-between">
        <div>
          <h3 className="text-lg font-bold">{cms.name}</h3>
          <p className="text-xs opacity-90">Click to explore</p>
        </div>
        <Image
          src={cms.logo}
          alt={cms.name}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Card;
