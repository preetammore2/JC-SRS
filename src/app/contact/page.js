'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiGlobe, HiClock, HiCheckCircle } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './page.module.css';

const contactInfo = [
  { icon: HiPhone, title: 'Phone', value: '+91 88664 42169', href: 'tel:+918866442169' },
  { icon: HiMail, title: 'Email', value: 'support@jcsrscentre.in', href: 'mailto:support@jcsrscentre.in' },
  { icon: HiLocationMarker, title: 'Address', value: '502, Shakti Extol, Zydus Hospital RD, Sola, Ahmedabad 380059, Gujarat' },
  { icon: HiClock, title: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 6:00 PM' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email address';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

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
            <span className="section-badge">Contact</span>
            <h1>Get in Touch</h1>
            <p>Have questions about our franchise or services? We&apos;d love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form */}
            <AnimatedSection variant="fade-right">
              <div className={styles.formCard}>
                <h3>Send us a Message</h3>
                <p>Fill out the form and our team will get back to you within 24 hours.</p>

                {submitted && (
                  <motion.div
                    className={styles.successMsg}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <HiCheckCircle /> Message sent successfully! We will contact you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? styles.inputError : ''}`}
                        placeholder="Enter your name"
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? styles.inputError : ''}`}
                        placeholder="Enter your email"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your phone"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter subject"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-textarea ${errors.message ? styles.inputError : ''}`}
                      placeholder="Type your message..."
                      rows={5}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection variant="fade-left" className={styles.infoCol}>
              <div className={styles.infoCards}>
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    className={styles.infoCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={styles.infoIconWrap}>
                      <info.icon className={styles.infoIcon} />
                    </div>
                    <div>
                      <h4>{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className={styles.infoValue}>{info.value}</a>
                      ) : (
                        <p className={styles.infoValue}>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div className={styles.socialCard}>
                <h4>Follow Us</h4>
                <div className={styles.socials}>
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className={styles.socialIcon}
                      whileHover={{ scale: 1.15, y: -3 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.123456789!2d72.5!3d23.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAzJzM2LjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="JC SRS Centre Location"
        />
      </section>
    </>
  );
}
