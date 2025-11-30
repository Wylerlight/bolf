import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react';
import './AnimatedBoard.css';

// Import board member photos
import daniellePhoto from '../../assets/Danielle-Marrufo.jpg';
import cesarPhoto from '../../assets/Cesar-Marrufo.png';
import kevinPhoto from '../../assets/Kevin-Cisneros.jpg';
import melissaPhoto from '../../assets/Melissa-Chagolla.jpg';

const AnimatedBoard = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const boardMembers = [
    {
      id: 1,
      name: 'Danielle Soto-Marrufo',
      title: 'Co-Founder & Director',
      company: 'C&D Real Estate',
      bio: "Danielle is a passionate advocate for community development and has been instrumental in building the foundation's outreach programs. With over 15 years in real estate, she brings valuable business acumen and a heart for service.",
      achievements: [
        'Founded BOLF in 2018',
        'Organized 50+ community events',
        'Real Estate Professional since 2008',
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      image: daniellePhoto,
    },
    {
      id: 2,
      name: 'Cesar Marrufo',
      title: 'Co-Founder & Director',
      company: 'C&D Real Estate',
      bio: "Cesar's leadership and vision have guided BOLF through significant growth. His commitment to helping families in need drives the foundation's mission forward every day.",
      achievements: [
        'Co-Founded BOLF',
        'Led major fundraising initiatives',
        'Community Leader Award 2023',
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      image: cesarPhoto,
    },
    {
      id: 3,
      name: 'Kevin Cisneroz',
      title: 'Regional Sales & Operations Manager',
      company: 'Inland Empire Escrow',
      bio: "Kevin serves as Inland Empire Escrow's Operations Executive who oversees all sales, marketing and advertising, and introduces new technology, services, and guidelines for our company. Kevin alongside other team members maintains and forms relationships in the real estate and mobile home industries. Kevin gives back to our community through service clubs, the city, school districts, and real estate industry. He is an asset to our team and community.",
      achievements: [
        'Financial Operations Leader',
        'Escrow Industry Expert',
        '10+ years with BOLF',
      ],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      image: kevinPhoto,
    },
    {
      id: 4,
      name: 'Melissa Chagolla',
      title: 'Mortgage Broker - NMLS #327539',
      company: 'Sierra Crest Mortgage',
      bio: 'Melissa is your premiere mortgage expert located in Yucaipa, California. She prides herself on offering some of the lowest rates nationwide and make the loan process simple, straightforward and fast for borrowers seeking a mortgage in the Yucaipa area.Whether you are first time home buyer, purchasing your dream home, refinancing an outstanding loan, or consolidating debt, Melissa can help you take that first step toward a financial solution.',
      achievements: [
        'Community Partnership Developer',
        'Mortgage Industry Professional',
        'Event Coordination Specialist',
      ],
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      image: melissaPhoto,
    },
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="animated-board">
      <motion.div
        className="board-banner"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="banner-content">
          {' '}
          <motion.div
            className="banner-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          />
          <motion.h2
            className="banner-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          >
            Board of Directors
          </motion.h2>
          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          >
            Executive leadership driving organizational excellence
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="board-grid"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {boardMembers.map((member, index) => (
          <motion.div
            key={member.id}
            layoutId={`card-${member.id}`}
            variants={cardVariants}
            whileHover={selectedMember ? {} : 'hover'}
            onClick={() => setSelectedMember(member)}
            className={`board-card card-${index + 1}`}
            style={{
              backgroundImage:
                selectedMember?.id === member.id
                  ? 'none'
                  : `url(${member.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: selectedMember?.id === member.id ? 'none' : 'flex',
            }}
          >
            <motion.div
              className="card-overlay"
              layoutId={`overlay-${member.id}`}
            >
              <motion.div
                className="card-content"
                layoutId={`content-${member.id}`}
              >
                <motion.h3
                  className="member-name"
                  layoutId={`name-${member.id}`}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="member-title"
                  layoutId={`title-${member.id}`}
                >
                  {member.title}
                </motion.p>
                <motion.p
                  className="member-company"
                  layoutId={`company-${member.id}`}
                >
                  {member.company}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
            />
            <motion.div
              layoutId={`card-${selectedMember.id}`}
              className="board-card expanded"
              style={{
                backgroundImage: `url(${selectedMember.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <button
                className="close-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMember(null);
                }}
              >
                ×
              </button>
              <motion.div
                layoutId={`overlay-${selectedMember.id}`}
                className="expanded-overlay"
              >
                <motion.div
                  layoutId={`content-${selectedMember.id}`}
                  className="expanded-content"
                >
                  <div className="expanded-header">
                    <motion.h3
                      layoutId={`name-${selectedMember.id}`}
                      className="expanded-name"
                    >
                      {selectedMember.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`title-${selectedMember.id}`}
                      className="expanded-title"
                    >
                      {selectedMember.title}
                    </motion.p>
                    <motion.p
                      layoutId={`company-${selectedMember.id}`}
                      className="expanded-company"
                    >
                      {selectedMember.company}
                    </motion.p>
                  </div>

                  <motion.div
                    className="expanded-details"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="bio-section">
                      <h4>About</h4>
                      <p>{selectedMember.bio}</p>
                    </div>

                    <div className="achievements-section">
                      <h4>Key Contributions</h4>
                      <ul>
                        {selectedMember.achievements.map(
                          (achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AnimatedBoard;
