'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  HiUsers, HiOfficeBuilding, HiCash, HiDesktopComputer,
  HiShieldCheck, HiLightningBolt, HiClock, HiGlobe,
  HiStar, HiArrowRight, HiCheckCircle
} from 'react-icons/hi';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import styles from './page.module.css';

/* Stats Counter */
function Counter({ end, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

const services = [
  { icon: HiUsers, title: 'Manpower Solutions', desc: 'Reliable workforce solutions across industries — housekeeping, security, industrial workers, and facility management.' },
  { icon: HiOfficeBuilding, title: 'Vendor & Contract Support', desc: 'Connect businesses with verified vendors for contracts, logistics, canteen, and equipment services.' },
  { icon: HiCash, title: 'Financial & Insurance', desc: 'Loan assistance, credit cards, investment advisory, life/health/general insurance services.' },
  { icon: HiDesktopComputer, title: 'Digital Services', desc: 'Mobile recharge, bill payments, PAN/GST filing, company registration, and travel booking.' },
];

const features = [
  { icon: HiShieldCheck, title: 'Trusted Platform', desc: 'Secure, reliable operations backed by JC Integrated Business Pvt. Ltd.' },
  { icon: HiLightningBolt, title: '5-Min Activation', desc: 'Instant ID activation — get started within minutes of registration.' },
  { icon: HiClock, title: '24/7 Support', desc: 'Continuous training & support to help you succeed at every step.' },
  { icon: HiGlobe, title: 'Nationwide Network', desc: 'Build a local service network connected to a nationwide ecosystem.' },
];

const stats = [
  { value: 100, suffix: '+', label: 'Digital Services' },
  { value: 500, suffix: '+', label: 'Franchise Partners' },
  { value: 49999, prefix: '₹', label: 'Starting Investment' },
  { value: 5, label: 'Min Activation' },
];

const testimonials = [
  { name: 'Rajesh Sharma', role: 'Franchise Partner, Ahmedabad', text: 'JC SRS Centre has completely transformed my business. The multiple income streams from manpower, vendor, and digital services make it truly unique.' },
  { name: 'Priya Patel', role: 'District Partner, Surat', text: 'The support and training from JC team is exceptional. I started earning from day one with their easy-to-use platform.' },
  { name: 'Amit Gupta', role: 'Franchise Owner, Rajkot', text: 'Best franchise investment I have ever made. Low cost, high returns, and the diversified service model keeps customers coming back.' },
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroParticles}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            />
          ))}
        </div>
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="section-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              A Unit of JC Integrated Business Pvt. Ltd.
            </motion.span>
            <h1 className={styles.heroTitle}>
              Your Gateway to{' '}
              <span className="gradient-text">Digital Service</span>{' '}
              Excellence
            </h1>
            <p className={styles.heroDesc}>
              Start your own Digital Service Centre franchise with 100+ Government & Digital Services.
              Manpower solutions, vendor support, financial services — all under one roof.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/apply" className="btn btn-primary btn-pulse">
                Start Your Franchise <HiArrowRight />
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className={styles.heroLogoWrapper}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/logo2.jpg"
                alt="JC SRS Centre"
                width={420}
                height={420}
                className={styles.heroLogo}
                priority
              />
            </motion.div>
            <div className={styles.heroGlow} />
          </motion.div>
        </div>

        {/* Hero Stats Bar */}
        <motion.div
          className={styles.heroStats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className={`container ${styles.statsGrid}`}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statValue}>
                  <Counter end={stat.value} suffix={stat.suffix || ''} prefix={stat.prefix || ''} />
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ========== SERVICES OVERVIEW ========== */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge" >What We Offer</span>
            <br></br><h2>Integrated Business Services</h2>
            <p>One platform, multiple high-demand services — designed for maximum earning potential.</p>
            <div className="gold-line" />
          </AnimatedSection>

          <StaggerContainer className="grid-4" staggerDelay={0.12}>
            {services.map((service, i) => (
              <StaggerItem key={i}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    <service.icon className={styles.serviceIcon} />
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                  <Link href="/services" className={styles.serviceLink}>
                    Learn More <HiArrowRight />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className={`section section-dark ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <AnimatedSection variant="fade-right" className={styles.whyContent}>
              <span className="section-badge">Why Choose Us</span>
              <h2>Build a Complete Service Business</h2>
              <p>
                At JC SRS Centre, we empower you to build a scalable business with multiple revenue streams.
                From manpower solutions to digital services — everything is integrated into one powerful platform.
              </p>
              <ul className={styles.checkList}>
                {[
                  'Integrated model: Manpower + Vendor + Financial + Digital',
                  'Low investment with scalable growth',
                  'Continuous support & training',
                  'Opportunity to build a local service network',
                  'Strong and diversified earning potential',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <HiCheckCircle className={styles.checkIcon} />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Link href="/franchise" className="btn btn-primary" style={{ marginTop: 16 }}>
                Explore Franchise <HiArrowRight />
              </Link>
            </AnimatedSection>

            <AnimatedSection variant="fade-left" className={styles.whyFeatures}>
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  className={`glass-card-dark ${styles.featureCard}`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <feat.icon className={styles.featureIcon} />
                  <div>
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className={`section section-gray ${styles.testimonialSection}`}>
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Testimonials</span>
           <br></br> <h2>What Our Partners Say</h2>
            <p>Hear from franchise partners who are building successful businesses with JC SRS Centre.</p>
            <div className="gold-line" />
          </AnimatedSection>

          <AnimatedSection className={styles.testimonialWrapper}>
            <div className={styles.testimonialCard}>
              <HiStar className={styles.quoteIcon} />
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className={styles.star} />
                ))}
              </div>
              <motion.p
                key={currentTestimonial}
                className={styles.testimonialText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </motion.p>
              <motion.div
                key={`name-${currentTestimonial}`}
                className={styles.testimonialAuthor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <strong>{testimonials[currentTestimonial].name}</strong>
                <span>{testimonials[currentTestimonial].role}</span>
              </motion.div>
              <div className={styles.dots}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === currentTestimonial ? styles.dotActive : ''}`}
                    onClick={() => setCurrentTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className="container">
          <AnimatedSection variant="scale-up" className={styles.ctaContent}>
            <h2>Ready to Start Your Franchise Journey?</h2>
            <p>
              Join hundreds of successful franchise partners. Start your Digital Service Centre with
              just <strong>₹49,999</strong> and unlock multiple income streams.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/apply" className="btn btn-primary btn-pulse">
                Apply for Franchise <HiArrowRight />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
