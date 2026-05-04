'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import styles from './page.module.css';

const categories = ['All', 'Office', 'Services', 'Team', 'Events'];

const galleryItems = [
  { id: 1, cat: 'Office', title: 'Franchise Centre Setup', color: '#1B3A5C', desc: 'Modern franchise centre with complete digital setup' },
  { id: 2, cat: 'Services', title: 'Digital Service Kendra', color: '#E8A520', desc: 'Customer accessing digital services at our kiosk' },
  { id: 3, cat: 'Team', title: 'Training Session', color: '#2A4F7A', desc: 'Partner training and onboarding session' },
  { id: 4, cat: 'Events', title: 'Franchise Launch Event', color: '#C78B10', desc: 'Grand opening of a new franchise centre' },
  { id: 5, cat: 'Office', title: 'Headquarters Ahmedabad', color: '#0D1B2A', desc: 'JC Integrated Business headquarters at Shakti Extol' },
  { id: 6, cat: 'Services', title: 'Financial Services', color: '#28A745', desc: 'Partners providing financial and insurance services' },
  { id: 7, cat: 'Team', title: 'Annual Meet', color: '#8B5CF6', desc: 'Franchise partner annual meetup and recognition' },
  { id: 8, cat: 'Events', title: 'Awards Ceremony', color: '#E8A520', desc: 'Top performing partners receiving recognition awards' },
  { id: 9, cat: 'Office', title: 'Service Counter', color: '#1B3A5C', desc: 'Well-organized service counter at franchise centre' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.cat === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.heroContent}
          >
            <span className="section-badge">Gallery</span>
            <h1>Our Gallery</h1>
            <p>Glimpses of our franchise centres, team events, and service operations across India.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          {/* Filters */}
          <AnimatedSection className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <motion.div className={styles.galleryGrid} layout>
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  className={styles.galleryItem}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightbox(item)}
                  whileHover={{ scale: 1.03 }}
                >
                  <div
                    className={styles.galleryImage}
                    style={{ background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)` }}
                  >
                    <div className={styles.galleryPlaceholder} style={{ color: item.color }}>
                      <span className={styles.placeholderIcon}>📷</span>
                      <span className={styles.placeholderText}>{item.title}</span>
                    </div>
                  </div>
                  <div className={styles.galleryInfo}>
                    <span className={styles.galleryCat}>{item.cat}</span>
                    <h4>{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div
                className={styles.lightboxImage}
                style={{ background: `linear-gradient(135deg, ${lightbox.color}50, ${lightbox.color}20)` }}
              >
                <span style={{ fontSize: '4rem' }}>📷</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 600, color: lightbox.color }}>{lightbox.title}</span>
              </div>
              <div className={styles.lightboxInfo}>
                <h3>{lightbox.title}</h3>
                <p>{lightbox.desc}</p>
                <span className={styles.galleryCat}>{lightbox.cat}</span>
              </div>
              <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
