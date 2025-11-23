import React, { useRef, useState, useEffect } from 'react';
import './Carousel.css';
import { motion, useTransform, useScroll } from 'motion/react';

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsTablet(window.innerWidth <= 768 && window.innerWidth > 480);
      setIsMediumScreen(window.innerWidth <= 1024 && window.innerWidth > 800);
      setIsSmallScreen(window.innerWidth <= 800);
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
    offset: ['start center', 'end center'],
  });
  function CarouselCard({ card, index }) {
    // Calculate the scroll progress ranges for this specific card
    const cardStart = index / cards.length;
    const cardEnd = (index + 1) / cards.length; // Horizontal fan stacking - first card left, subsequent cards progressively right
    const x = useTransform(
      scrollYProgress,
      [
        Math.max(0, cardStart - 0.1), // Start entering from right slightly before its turn
        cardStart + 0.05, // Fully centered
        cardEnd - 0.05, // Stay centered
        Math.min(1, cardEnd + 0.1), // Stay stacked (don't exit)
      ],
      [
        '100vw', // Start off-screen right
        // Responsive positioning - horizontal fan on large screens, centered on small
        isSmallScreen
          ? '-50%' // Small screens: center all cards
          : index === 0
          ? isMediumScreen
            ? 'calc(-50% - 100px)' // Medium screens (1024-800px): less offset for first card
            : isTablet
            ? 'calc(-50% - 120px)'
            : 'calc(-50% - 200px)' // Large screens: first card further left
          : `calc(-50% + ${
              isMediumScreen
                ? -100 + index * 90 // Medium screens: smaller spacing
                : isTablet
                ? -120 + index * 100
                : -200 + index * 140 // Large screens: wider spacing
            }px)`, // Subsequent cards spread right
        isSmallScreen
          ? '-50%'
          : index === 0
          ? isMediumScreen
            ? 'calc(-50% - 100px)'
            : isTablet
            ? 'calc(-50% - 120px)'
            : 'calc(-50% - 200px)'
          : `calc(-50% + ${
              isMediumScreen
                ? -100 + index * 90
                : isTablet
                ? -120 + index * 100
                : -200 + index * 140
            }px)`,
        isSmallScreen
          ? '-50%'
          : index === 0
          ? isMediumScreen
            ? 'calc(-50% - 100px)'
            : isTablet
            ? 'calc(-50% - 120px)'
            : 'calc(-50% - 200px)'
          : `calc(-50% + ${
              isMediumScreen
                ? -100 + index * 90
                : isTablet
                ? -120 + index * 100
                : -200 + index * 140
            }px)`,
      ]
    );

    // Y position - horizontal on large screens, vertical fanning on small screens
    const y = useTransform(
      scrollYProgress,
      [
        Math.max(0, cardStart - 0.1),
        cardStart + 0.05,
        cardEnd - 0.05,
        Math.min(1, cardEnd + 0.1),
      ],
      [
        '-50%', // Start centered
        '-50%', // Stay centered when active
        isSmallScreen
          ? `calc(-50% + ${index * -15}px)` // Small screens: vertical fanning (like Lenis)
          : `calc(-50% + ${index * -5}px)`, // Large screens: minimal vertical offset
        isSmallScreen
          ? `calc(-50% + ${index * -15}px)`
          : `calc(-50% + ${index * -5}px)`,
      ]
    ); // Scale - keep cards mostly same size for better visibility
    const scale = useTransform(
      scrollYProgress,
      [
        Math.max(0, cardStart - 0.1),
        cardStart,
        cardEnd,
        Math.min(1, cardEnd + 0.1),
      ],
      [
        0.8, // Start smaller
        1, // Full size when active
        0.98 - index * 0.01, // Very slight scale reduction for depth
        0.98 - index * 0.01, // Maintain stacked scale
      ]
    );

    // Subtle rotation for natural card spread
    const rotate = useTransform(
      scrollYProgress,
      [
        Math.max(0, cardStart - 0.1),
        cardStart,
        cardEnd,
        Math.min(1, cardEnd + 0.1),
      ],
      [
        '0deg', // Start straight
        '0deg', // Stay straight when active
        `${index * 2 - 2}deg`, // Slight rotation spread
        `${index * 2 - 2}deg`, // Maintain rotation
      ]
    ); // Better opacity - keep all cards fully visible when stacked
    const opacity = useTransform(
      scrollYProgress,
      [
        Math.max(0, cardStart - 0.1),
        cardStart,
        cardEnd,
        Math.min(1, cardEnd + 0.1),
      ],
      [
        0, // Hidden initially
        1, // Full opacity when active
        1, // Keep full opacity when stacked
        1, // Remain fully visible in stack
      ]
    ); // For mobile screens, don't apply motion animations
    if (isMobile) {
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
          y,
          rotate,
          scale,
          opacity,
          zIndex: index + 1, // First card highest z-index, subsequent cards behind
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
      style={{ height: isMobile ? 'auto' : `${cards.length * 100 + 100}vh` }} // Dynamic height based on card count, auto for mobile
    >
      <div className="slider-inner">
        {cards.map((card, index) => (
          <CarouselCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
