import React, { useRef, useState, useEffect } from 'react';
import './Carousel.css';
// eslint-disable-next-line no-unused-vars
import { motion, useTransform, useScroll } from 'motion/react';

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [isUltraTiny, setIsUltraTiny] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsUltraTiny(
        window.innerHeight <= 300 ||
          (window.innerWidth <= 400 && window.innerHeight <= 400)
      );
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const cards = [
    {
      id: 1,
      title: 'WELCOME TO THE BUILT ON LOVE FOUNDATION',
      text: 'The BUILT ON LOVE FOUNDATION is dedicated to uplifting underprivileged individuals and families in the Inland Empire, with a direct focus on the Yucaipa to Banning Pass area. Through our efforts, we aim to bridge the gap for those struggling to make ends meet, ensuring that no family goes without essential support during critical times of the year.',
    },
    {
      id: 2,
      title: 'JAMES 1:22',
      text: 'But be doers of the word, and not hearers only, deceiving yourselves.',
    },
    {
      id: 3,
      title: 'CORE VALUES ✝',
      text: 'Belief in God Support in Community Care for Orphans & Widows Education for All.',
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  function CarouselCard({ card, index }) {
    const cardStart = index / cards.length;
    const cardEnd = (index + 1) / cards.length;

    const x = useTransform(
      scrollYProgress,
      [cardStart - 0.1, cardStart + 0.1, cardEnd - 0.1, cardEnd + 0.1],
      ['100vw', '-50%', '-50%', '-100vw']
    );

    const opacity = useTransform(
      scrollYProgress,
      [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
      [0, 1, 1, 0]
    );

    const scale = useTransform(
      scrollYProgress,
      [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
      [0.8, 1, 1, 0.8]
    );

    if (isMobile || isUltraTiny) {
      return (
        <div
          className="slider-card"
          role="article"
          aria-labelledby={`card-title-${card.id}`}
          tabIndex="0"
        >
          <h2 id={`card-title-${card.id}`}>{card.title}</h2>
          <p>{card.text}</p>
        </div>
      );
    }

    return (
      <motion.div
        className="slider-card"
        role="article"
        aria-labelledby={`card-title-${card.id}`}
        tabIndex="0"
        style={{
          x,
          opacity,
          scale,
          zIndex: index + 1,
        }}
      >
        <h2 id={`card-title-${card.id}`}>{card.title}</h2>
        <p>{card.text}</p>
      </motion.div>
    );
  }

  return (
    <section
      ref={containerRef}
      className="slider-section"
      aria-label="Foundation Information Carousel"
      role="region"
      style={{
        height:
          isMobile || isUltraTiny ? 'auto' : `${cards.length * 100 + 100}vh`,
      }}
    >
      <div className="slider-inner">
        {cards.map((card, index) => (
          <CarouselCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
