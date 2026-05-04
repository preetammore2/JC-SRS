'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight, HiCalendar, HiClock, HiTag } from 'react-icons/hi';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import styles from './page.module.css';

const blogPosts = [
  {
    id: 1,
    title: 'How to Start a Successful Digital Service Centre Franchise',
    excerpt: 'Learn the step-by-step process to launch your own digital service centre with JC SRS Centre. From registration to first customer — everything you need to know.',
    category: 'Tips',
    date: 'April 15, 2026',
    readTime: '5 min read',
    color: '#E8A520',
  },
  {
    id: 2,
    title: 'Top 10 Government Services You Can Offer Through JC SRS Centre',
    excerpt: 'Discover the most in-demand government services that generate daily customer flow and consistent revenue for franchise partners.',
    category: 'News',
    date: 'April 10, 2026',
    readTime: '4 min read',
    color: '#1B3A5C',
  },
  {
    id: 3,
    title: 'JC SRS Centre Expands to 500+ Franchise Partners Nationwide',
    excerpt: 'A milestone achievement as JC Integrated Business Pvt. Ltd. welcomes its 500th franchise partner, marking a new era of growth.',
    category: 'News',
    date: 'April 5, 2026',
    readTime: '3 min read',
    color: '#28A745',
  },
  {
    id: 4,
    title: 'Understanding Financial Services: A Guide for Franchise Partners',
    excerpt: 'How to leverage our financial services suite including loans, credit cards, and insurance to maximize your earnings and customer trust.',
    category: 'Tips',
    date: 'March 28, 2026',
    readTime: '6 min read',
    color: '#8B5CF6',
  },
  {
    id: 5,
    title: 'Manpower Solutions: The Untapped Revenue Stream for Your Franchise',
    excerpt: 'Why manpower sourcing is one of the highest-earning service categories and how you can offer it through your franchise centre.',
    category: 'Updates',
    date: 'March 20, 2026',
    readTime: '4 min read',
    color: '#E8A520',
  },
  {
    id: 6,
    title: 'Monthly Partner Spotlight: Success Stories from the Field',
    excerpt: 'Hear from our top-performing franchise partners about their journey, challenges, and achievements with JC SRS Centre.',
    category: 'Updates',
    date: 'March 15, 2026',
    readTime: '5 min read',
    color: '#C78B10',
  },
];

const cats = ['All', 'News', 'Tips', 'Updates'];

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? blogPosts : blogPosts.filter(p => p.category === filter);

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
            <span className="section-badge">Blog</span>
            <h1>News & Insights</h1>
            <p>Stay updated with the latest franchise tips, company news, and industry insights.</p>
          </motion.div>
        </div>
      </section>

      {/* Blog List */}
      <section className="section">
        <div className="container">
          <AnimatedSection className={styles.filters}>
            {cats.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          <StaggerContainer className={styles.blogGrid} staggerDelay={0.1}>
            {filtered.map((post) => (
              <StaggerItem key={post.id}>
                <motion.article
                  className={styles.blogCard}
                  whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
                >
                  <div className={styles.blogImage} style={{ background: `linear-gradient(135deg, ${post.color}30, ${post.color}10)` }}>
                    <span style={{ fontSize: '3rem' }}>📰</span>
                  </div>
                  <div className={styles.blogBody}>
                    <div className={styles.blogMeta}>
                      <span className={styles.blogCat} style={{ background: `${post.color}15`, color: post.color }}>
                        <HiTag /> {post.category}
                      </span>
                      <span className={styles.blogDate}><HiCalendar /> {post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className={styles.blogFooter}>
                      <span className={styles.readTime}><HiClock /> {post.readTime}</span>
                      <span className={styles.readMore}>Read More <HiArrowRight /></span>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
