'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  HiCheckCircle, HiLightBulb, HiGlobe, HiShieldCheck,
  HiUserGroup, HiArrowRight, HiStar, HiTrendingUp
} from 'react-icons/hi';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import styles from './page.module.css';

const values = [
  { icon: HiShieldCheck, title: 'Trust & Reliability', desc: 'We maintain the highest standards of integrity in every transaction and partnership.' },
  { icon: HiLightBulb, title: 'Innovation', desc: 'Continuously evolving our platform with cutting-edge technology and service offerings.' },
  { icon: HiUserGroup, title: 'Empowerment', desc: 'Enabling entrepreneurs and partners to build sustainable, high-income businesses.' },
  { icon: HiTrendingUp, title: 'Growth-Focused', desc: 'Every service and tool we provide is designed to maximize partner success and revenue.' },
];

const reasons = [
  'Integrated business model (Manpower + Vendor + Financial + Digital)',
  'Low investment with scalable growth potential',
  'Continuous support & training from expert team',
  'Opportunity to build a local service network',
  'Strong and diversified earning potential',
  'Create unlimited retailers & distributors',
  'Earn commission on every transaction',
  'Extra incentives & bonuses on monthly targets',
];

export default function AboutPage() {
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
            <span className="section-badge">About Us</span>
            <h1>Who We Are</h1>
            <p>Empowering businesses and entrepreneurs with integrated service solutions since inception.</p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className={styles.overviewGrid}>
            <AnimatedSection variant="fade-right" className={styles.overviewImage}>
              <Image
                src="/images/logo2.jpg"
                alt="JC SRS Centre"
                width={500}
                height={400}
                className={styles.aboutImg}
              />
            </AnimatedSection>
            <AnimatedSection variant="fade-left" className={styles.overviewText}>
              <span className="section-badge">Company Overview</span>
              <h2>JC SRS Centre — Digital Service Kendra</h2>
              <p className={styles.subtitle}>(A Unit of JC Integrated Business Private Limited)</p>
              <p>
                JC SRS Centre is a multi-service business platform offering Manpower Solutions,
                Vendor Support Services, Financial & Insurance Services, and Digital Services
                under one integrated system.
              </p>
              <p>
                Our objective is to create a one-stop service hub that enables entrepreneurs,
                franchise partners, and businesses to deliver multiple high-demand services
                while building a sustainable and scalable income model.
              </p>
              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <HiStar className={styles.highlightIcon} />
                  <div>
                    <strong>One Platform</strong>
                    <span>Multiple Services</span>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <HiGlobe className={styles.highlightIcon} />
                  <div>
                    <strong>Nationwide</strong>
                    <span>Service Network</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-gray">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Our Purpose</span>
            <h2>Mission & Vision</h2>
            <div className="gold-line" />
          </AnimatedSection>

          <div className={styles.mvGrid}>
            <AnimatedSection variant="fade-right">
              <div className={styles.mvCard}>
                <div className={styles.mvIcon}>🎯</div>
                <h3>Our Mission</h3>
                <ul>
                  <li><HiCheckCircle className={styles.checkIcon} /> Provide easy access to essential services for individuals and businesses</li>
                  <li><HiCheckCircle className={styles.checkIcon} /> Empower partners with multiple earning opportunities</li>
                  <li><HiCheckCircle className={styles.checkIcon} /> Connect service providers, vendors, and customers on a single platform</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fade-left">
              <div className={styles.mvCard}>
                <div className={styles.mvIcon}>🌍</div>
                <h3>Our Vision</h3>
                <p>
                  To build a strong nationwide service ecosystem where manpower, vendor support,
                  and digital services operate seamlessly with trust, efficiency, and innovation.
                </p>
                <p>
                  We envision a future where every community has access to reliable, integrated
                  business services through our network of empowered franchise partners.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Our Values</span>
            <h2>What Drives Us</h2>
            <p>The principles that guide every decision and service we provide.</p>
            <div className="gold-line" />
          </AnimatedSection>

          <StaggerContainer className="grid-4" staggerDelay={0.1}>
            {values.map((val, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className={styles.valueCard}
                  whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
                >
                  <div className={styles.valueIconWrap}>
                    <val.icon className={styles.valueIcon} />
                  </div>
                  <h4>{val.title}</h4>
                  <p>{val.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Join */}
      <section className="section section-dark">
        <div className="container">
          <div className={styles.whyGrid}>
            <AnimatedSection variant="fade-right">
              <span className="section-badge">Join Us</span>
              <h2>Why Join JC SRS Centre?</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>
                We empower you to build a complete service business where you can provide
                manpower and vendor solutions, offer financial services, and deliver essential
                digital services to your community.
              </p>
              <ul className={styles.reasonList}>
                {reasons.map((reason, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <HiCheckCircle className={styles.reasonIcon} />
                    {reason}
                  </motion.li>
                ))}
              </ul>
              <Link href="/apply" className="btn btn-primary" style={{ marginTop: 24 }}>
                Apply for Franchise <HiArrowRight />
              </Link>
            </AnimatedSection>

            <AnimatedSection variant="fade-left" className={styles.quoteBox}>
              <div className={styles.closingQuote}>
                <div className={styles.quoteMarks}>&ldquo;</div>
                <p>
                  JC SRS Centre, powered by JC Integrated Business Pvt. Ltd., is a multi-service
                  platform combining manpower solutions, vendor support, financial & insurance
                  services, and digital services — helping partners build a scalable, high-income business.
                </p>
                <div className={styles.quoteLine} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
