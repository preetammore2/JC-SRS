'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  HiArrowRight, HiCheckCircle, HiCurrencyRupee,
  HiDocumentText, HiDesktopComputer, HiUsers,
  HiTrendingUp, HiStar, HiLightningBolt, HiShieldCheck
} from 'react-icons/hi';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import styles from './page.module.css';

const benefits = [
  { icon: HiUsers, title: 'Unlimited Retailers', desc: 'Create unlimited retailers under your franchise network.' },
  { icon: HiTrendingUp, title: 'Unlimited Distributors', desc: 'Create unlimited distributors and earn from their growth.' },
  { icon: HiCurrencyRupee, title: 'District Earnings', desc: 'Earn from every new retailer & distributor in your district.' },
  { icon: HiStar, title: 'Transaction Commission', desc: 'Commission on every transaction done by your retailers.' },
  { icon: HiLightningBolt, title: 'Monthly Bonuses', desc: 'Extra incentives & bonuses on monthly targets achievement.' },
  { icon: HiShieldCheck, title: 'Complete Support', desc: 'Full training, marketing materials, and ongoing support.' },
];

const documents = [
  'Aadhaar Card', 'PAN Card', 'High School Certificate',
  'Electricity Bill or Rent Agreement', 'GST/MSME Certificate',
  'Resident Certificate', 'Police Verification', 'Cancelled Cheque / Passbook',
];

const gadgets = [
  { name: 'Computer / Laptop', icon: '💻' },
  { name: 'Printer', icon: '🖨️' },
  { name: 'Concrete Roof Office', icon: '🏢' },
  { name: 'Shop in Market Area', icon: '🏪' },
  { name: 'Electricity Backup', icon: '⚡' },
  { name: 'Internet Connection', icon: '🌐' },
];

const steps = [
  { step: '01', title: 'Register Online', desc: 'Fill the franchise application form with your details.' },
  { step: '02', title: 'Verification', desc: 'Our team verifies your documents and eligibility within 2 weeks.' },
  { step: '03', title: 'Get Activated', desc: 'Instant ID activation in 5 minutes after approval. Start earning!' },
];

export default function FranchisePage() {
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
            <span className="section-badge">Franchise Opportunity</span>
            <h1>Own Your Digital Service Centre</h1>
            <p>Start your franchise with just ₹49,999 and earn from 100+ Government & Digital Services.</p>
            <motion.div
              className={styles.priceBadge}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className={styles.priceLabel}>Franchise Cost</span>
              <span className={styles.priceValue}>₹49,999/-</span>
              <span className={styles.priceNote}>One-time Investment</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Benefits</span>
            <h2>Franchise Partner Benefits</h2>
            <p>Multiple income streams designed for maximum growth potential.</p>
            <div className="gold-line" />
          </AnimatedSection>

          <StaggerContainer className="grid-3" staggerDelay={0.1}>
            {benefits.map((benefit, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className={styles.benefitCard}
                  whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(232,165,32,0.12)' }}
                >
                  <div className={styles.benefitIcon}>
                    <benefit.icon />
                  </div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-dark">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Process</span>
            <h2>How It Works</h2>
            <p>Three simple steps to start your franchise journey.</p>
            <div className="gold-line" />
          </AnimatedSection>

          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.2} className={styles.stepItem}>
                <div className={styles.stepNumber}>{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < steps.length - 1 && <div className={styles.stepLine} />}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Requirements</span>
            <h2>What You Need</h2>
            <div className="gold-line" />
          </AnimatedSection>

          <div className={styles.reqGrid}>
            {/* Documents */}
            <AnimatedSection variant="fade-right">
              <div className={styles.reqCard}>
                <div className={styles.reqHeader}>
                  <HiDocumentText className={styles.reqIcon} />
                  <h3>Required Documents</h3>
                </div>
                <ul className={styles.reqList}>
                  {documents.map((doc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <HiCheckCircle className={styles.reqCheck} />
                      {doc}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Gadgets */}
            <AnimatedSection variant="fade-left">
              <div className={styles.reqCard}>
                <div className={styles.reqHeader}>
                  <HiDesktopComputer className={styles.reqIcon} />
                  <h3>Required Setup</h3>
                </div>
                <div className={styles.gadgetGrid}>
                  {gadgets.map((gadget, i) => (
                    <motion.div
                      key={i}
                      className={styles.gadgetItem}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className={styles.gadgetEmoji}>{gadget.icon}</span>
                      <span>{gadget.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className="container">
          <AnimatedSection variant="scale-up" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <h2 style={{ color: 'var(--white)' }}>Ready to Start Your Franchise?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 550, margin: '0 auto 32px', fontSize: '1.1rem' }}>
              No technical skills needed. Instant activation in 5 minutes.
              Start earning from day one!
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/apply" className="btn btn-primary btn-pulse">
                Apply Now <HiArrowRight />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Talk to Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
