'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  HiUsers, HiOfficeBuilding, HiCash, HiDesktopComputer,
  HiArrowRight, HiCheckCircle, HiPhone, HiGlobe,
  HiCreditCard, HiShieldCheck, HiTruck, HiDocumentText
} from 'react-icons/hi';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import styles from './page.module.css';

const categories = [
  {
    id: 'manpower',
    icon: HiUsers,
    title: 'Manpower Solutions',
    desc: 'We provide reliable workforce solutions across industries, helping businesses reduce hiring challenges and improve operational efficiency.',
    services: [
      { name: 'Housekeeping Staff', icon: '🏠' },
      { name: 'Security Guards', icon: '🛡️' },
      { name: 'Office & Industrial Workers', icon: '🏭' },
      { name: 'Skilled & Unskilled Labour', icon: '👷' },
      { name: 'Facility Management Staff', icon: '🏢' },
    ],
    color: '#E8A520',
  },
  {
    id: 'vendor',
    icon: HiOfficeBuilding,
    title: 'Vendor & Contract Support',
    desc: 'We connect businesses with verified vendors and service providers, enabling partners to earn through vendor contracts and service deals.',
    services: [
      { name: 'Vendor Onboarding & Management', icon: '📋' },
      { name: 'Contract-Based Service Providers', icon: '📝' },
      { name: 'Canteen & Facility Contracts', icon: '🍽️' },
      { name: 'Logistics & Transportation Vendors', icon: '🚛' },
      { name: 'Equipment & Service Vendors', icon: '⚙️' },
    ],
    color: '#2A4F7A',
  },
  {
    id: 'financial',
    icon: HiCash,
    title: 'Financial & Insurance',
    desc: 'High-value financial and insurance services that generate strong commissions and client trust for our franchise partners.',
    services: [
      { name: 'Loan Assistance (Personal / Business)', icon: '💰' },
      { name: 'Credit Card Assistance', icon: '💳' },
      { name: 'Investment & Financial Advisory', icon: '📈' },
      { name: 'Insurance Services (Life/Health/General)', icon: '🛡️' },
      { name: 'Policy Renewal & Claim Assistance', icon: '📄' },
    ],
    color: '#28A745',
  },
  {
    id: 'digital',
    icon: HiDesktopComputer,
    title: 'Digital Services',
    desc: 'Comprehensive digital services ensuring daily customer flow and recurring income for franchise partners.',
    services: [
      { name: 'Mobile & DTH Recharge', icon: '📱' },
      { name: 'Electricity, Water, Gas Bill Payments', icon: '💡' },
      { name: 'PAN Card, GST, TDS Filing', icon: '📑' },
      { name: 'FSSAI, MSME, Company Registration', icon: '🏛️' },
      { name: 'Train, Flight, Bus & Hotel Booking', icon: '✈️' },
    ],
    color: '#8B5CF6',
  },
];

const platformAdvantages = [
  { icon: HiGlobe, text: 'One Platform – Multiple Services' },
  { icon: HiDesktopComputer, text: 'Easy-to-use system' },
  { icon: HiArrowRight, text: 'Fast onboarding process' },
  { icon: HiShieldCheck, text: 'Secure and reliable operations' },
  { icon: HiUsers, text: 'Continuous training & support' },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('manpower');
  const activeCategory = categories.find(c => c.id === activeTab);

  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.heroContent}
          >
            <span className="section-badge">Our Services</span>
            <h1>Integrated Business Services</h1>
            <p>One platform, four powerful service categories — designed for maximum earning potential and customer satisfaction.</p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge">What We Offer</span>
            <h2>Our Core Services</h2>
            <p>Explore our comprehensive range of services that power our franchise partners&apos; success.</p>
            <div className="gold-line" />
          </AnimatedSection>

          {/* Tab Buttons */}
          <AnimatedSection className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <cat.icon className={styles.tabIcon} />
                <span>{cat.title}</span>
              </button>
            ))}
          </AnimatedSection>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.tabContent}
            >
              <div className={styles.tabHeader}>
                <div className={styles.tabIconLarge} style={{ background: `${activeCategory.color}15` }}>
                  <activeCategory.icon style={{ color: activeCategory.color, fontSize: '2.5rem' }} />
                </div>
                <div>
                  <h3>{activeCategory.title}</h3>
                  <p>{activeCategory.desc}</p>
                </div>
              </div>

              <div className={styles.serviceGrid}>
                {activeCategory.services.map((service, i) => (
                  <motion.div
                    key={service.name}
                    className={styles.serviceItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
                  >
                    <span className={styles.serviceEmoji}>{service.icon}</span>
                    <span className={styles.serviceName}>{service.name}</span>
                    <HiCheckCircle className={styles.serviceCheck} style={{ color: activeCategory.color }} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section section-gray">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Complete Overview</span>
            <h2>All Services at a Glance</h2>
            <p>Every service available through the JC SRS Centre platform.</p>
            <div className="gold-line" />
          </AnimatedSection>

          <StaggerContainer className="grid-2" staggerDelay={0.15}>
            {categories.map((cat, i) => (
              <StaggerItem key={cat.id}>
                <div className={styles.categoryCard}>
                  <div className={styles.catHeader} style={{ borderLeftColor: cat.color }}>
                    <cat.icon className={styles.catIcon} style={{ color: cat.color }} />
                    <h4>{cat.title}</h4>
                  </div>
                  <ul className={styles.catList}>
                    {cat.services.map((service) => (
                      <li key={service.name}>
                        <HiCheckCircle className={styles.catCheck} />
                        {service.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Platform Advantages */}
      <section className="section section-dark">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Platform</span>
            <h2>Platform Advantages</h2>
            <p>Why our platform stands out for franchise partners.</p>
            <div className="gold-line" />
          </AnimatedSection>

          <StaggerContainer className={styles.advantageGrid} staggerDelay={0.1}>
            {platformAdvantages.map((adv, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className={`glass-card-dark ${styles.advantageCard}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <adv.icon className={styles.advIcon} />
                  <p>{adv.text}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <AnimatedSection variant="scale-up" style={{ textAlign: 'center' }}>
            <h2>Want to Offer These Services?</h2>
            <p style={{ maxWidth: 600, margin: '0 auto 32px', color: 'var(--gray-700)' }}>
              Become a JC SRS Centre franchise partner and start earning from all these services today.
            </p>
            <Link href="/apply" className="btn btn-primary btn-pulse">
              Apply for Franchise <HiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
