'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cmsList } from '../data';
import { CMS } from '../types';
import Card from './Card';

export default function HeadlessCMSShowcase() {
  const [selected, setSelected] = useState<CMS | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (selected || isPaused) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cmsList.length);
    }, 3000);
    return () => clearInterval(intervalRef.current!);
  }, [selected, isPaused]);

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        {!selected && (
          <motion.div
            key="carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex gap-10 p-12 rounded-3xl bg-white/80 backdrop-blur-md shadow-xl"
          >
            {cmsList.map((cms, i) => (
              <Card
                key={cms.id}
                cms={cms}
                isActive={i === activeIndex}
                onClick={() => setSelected(cms)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full bg-white flex flex-col"
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              className="relative h-80 w-full overflow-hidden"
              transition={{
                duration: 1.0,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${selected.color}cc 0%, ${selected.color}4d 100%)`,
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                <h1 className="text-5xl font-bold drop-shadow-md">
                  {selected.name}
                </h1>
                <p className="text-lg opacity-90">{selected.slogan}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
              className="flex-1 p-12 max-w-4xl mx-auto w-full"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {selected.pros.map((pro, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-600 mb-4">Cons</h3>
                  <ul className="space-y-2">
                    {selected.cons.map((con, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-red-500 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.button
                onClick={() => setSelected(null)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl text-white font-medium shadow-md cursor-pointer"
                style={{
                  backgroundColor: selected.color,
                  pointerEvents: 'auto',
                  zIndex: 10,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Back to CMS Gallery
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
