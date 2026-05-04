'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Franchise', href: '/franchise' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Apply Now', href: '/apply' },
];

const services = [
  'Manpower Solutions',
  'Vendor Support',
  'Financial Services',
  'Insurance Services',
  'Digital Services',
  'Travel Booking',
  'Tax Filing',
  'Company Registration',
];

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glowOrb} />
      <div className={`container ${styles.footerGrid}`}>
        {/* Company Info */}
        <motion.div
          className={styles.col}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/logo.jpg"
            alt="JC SRS Centre"
            width={180}
            height={60}
            className={styles.footerLogo}
          />
          <p className={styles.description}>
            JC SRS Centre, powered by JC Integrated Business Pvt. Ltd., is a multi-service platform
            combining manpower solutions, vendor support, financial & insurance services, and digital services.
          </p>
          <div className={styles.socials}>
            {socials.map((social) => (
              <a key={social.label} href={social.href} className={styles.socialIcon} aria-label={social.label}>
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className={styles.col}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.footerLink}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          className={styles.col}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className={styles.colTitle}>Our Services</h4>
          <ul className={styles.linkList}>
            {services.map((service) => (
              <li key={service}>
                <Link href="/services" className={styles.footerLink}>{service}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          className={styles.col}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className={styles.colTitle}>Contact Us</h4>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <HiLocationMarker className={styles.contactIcon} />
              <span>502, Shakti Extol, Zydus Hospital RD, Sola, Ahmedabad 380059, Gujarat</span>
            </div>
            <div className={styles.contactItem}>
              <HiPhone className={styles.contactIcon} />
              <a href="tel:+918866442169">+91 88664 42169</a>
            </div>
            <div className={styles.contactItem}>
              <HiMail className={styles.contactIcon} />
              <a href="mailto:support@jcsrscentre.in">support@jcsrscentre.in</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p>&copy; {new Date().getFullYear()} JC Integrated Business Pvt. Ltd. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
