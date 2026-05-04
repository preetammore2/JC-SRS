'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiUser, HiOfficeBuilding, HiCurrencyRupee, HiDocumentText, HiCheckCircle, HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './page.module.css';

const steps = [
  { id: 1, title: 'Applicant Info', icon: HiUser },
  { id: 2, title: 'Franchise Info', icon: HiOfficeBuilding },
  { id: 3, title: 'Investment', icon: HiCurrencyRupee },
  { id: 4, title: 'Review & Submit', icon: HiDocumentText },
];

const initialForm = {
  ownershipType: '',
  applicantName: '',
  stateOfIncorporation: '',
  yearOfIncorporation: '',
  gstNumber: '',
  mailingAddress: '',
  city: '',
  state: '',
  postalCode: '',
  country: 'India',
  contactPerson: '',
  designation: '',
  email: '',
  telBusiness: '',
  telMobile: '',
  website: '',
  entityType: '',
  numberOfEmployees: '',
  mainBusiness: '',
  reference: '',
  areaChoice1: '',
  areaChoice2: '',
  franchiseRights: '',
  whyInterested: '',
  howHeard: '',
  propertyAccess: '',
  retailFB: '',
  manufacturingFB: '',
  otherRetail: '',
  businessDetails: '',
  franchiseExperience: '',
  franchiseDetails: '',
  investmentRange: '',
  areaOver650: '',
  officeSetup: '',
  vehicles: '',
  separateEntity: '',
  additionalInfo: '',
  locationReason: '',
  declaration: false,
};

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateStep = (step) => {
    const errs = {};
    if (step === 1) {
      if (!formData.applicantName.trim()) errs.applicantName = 'Required';
      if (!formData.email.trim()) errs.email = 'Required';
      if (!formData.telMobile.trim()) errs.telMobile = 'Required';
      if (!formData.city.trim()) errs.city = 'Required';
      if (!formData.state.trim()) errs.state = 'Required';
    }
    if (step === 2) {
      if (!formData.areaChoice1.trim()) errs.areaChoice1 = 'Required';
    }
    if (step === 4) {
      if (!formData.declaration) errs.declaration = 'You must accept the declaration';
    }
    return errs;
  };

  const nextStep = () => {
    const errs = validateStep(currentStep);
    setErrors(errs);
    if (Object.keys(errs).length === 0 && currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateStep(4);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <>
        <section className={styles.pageHero}>
          <div className={styles.heroOverlay} />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className={styles.heroContent}>
              <span className="section-badge">Application</span>
              <h1>Apply for Franchise</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <motion.div
              className={styles.successCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <motion.div
                className={styles.successIcon}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                <HiCheckCircle />
              </motion.div>
              <h2>Application Submitted!</h2>
              <p>Thank you for your interest in JC SRS Centre franchise. Our team will review your application and contact you within 2 weeks.</p>
              <p className={styles.successEmail}>
                For enquiries: <a href="mailto:franchise@jcsrscentre.com">franchise@jcsrscentre.com</a> | <a href="tel:+918866442149">+91 8866 442 149</a>
              </p>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

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
            <span className="section-badge">Application</span>
            <h1>Franchise Application Form</h1>
            <p>Complete the form below to apply for your JC SRS Centre franchise. Processing takes approximately 2 weeks.</p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            {/* Progress */}
            <div className={styles.progress}>
              {steps.map((step, i) => (
                <div key={step.id} className={styles.progressItem}>
                  <div className={`${styles.progressCircle} ${currentStep >= step.id ? styles.progressActive : ''} ${currentStep > step.id ? styles.progressDone : ''}`}>
                    {currentStep > step.id ? <HiCheckCircle /> : <step.icon />}
                  </div>
                  <span className={`${styles.progressLabel} ${currentStep >= step.id ? styles.progressLabelActive : ''}`}>{step.title}</span>
                  {i < steps.length - 1 && <div className={`${styles.progressLine} ${currentStep > step.id ? styles.progressLineDone : ''}`} />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className={styles.formCard}>
              <AnimatePresence mode="wait">
                {/* Step 1: Applicant Information */}
                {currentStep === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                    <h3 className={styles.stepTitle}>I. Applicant Information</h3>

                    <div className="form-group">
                      <label className="form-label">Franchise operations to be owned by</label>
                      <div className={styles.radioGroup}>
                        {['Self', 'Group', 'Corporation'].map(opt => (
                          <label key={opt} className={styles.radioLabel}>
                            <input type="radio" name="ownershipType" value={opt} checked={formData.ownershipType === opt} onChange={handleChange} />
                            <span className={styles.radioCustom} />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label">Applicant Name *</label>
                        <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} className={`form-input ${errors.applicantName ? styles.inputError : ''}`} placeholder="Full name" />
                        {errors.applicantName && <span className="form-error">{errors.applicantName}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label">Contact Person (Dr/Mr/Mrs/Ms)</label>
                        <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className="form-input" placeholder="Contact person" />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className={`form-input ${errors.email ? styles.inputError : ''}`} placeholder="Email" />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label">Mobile Number *</label>
                        <input type="tel" name="telMobile" value={formData.telMobile} onChange={handleChange} className={`form-input ${errors.telMobile ? styles.inputError : ''}`} placeholder="Mobile number" />
                        {errors.telMobile && <span className="form-error">{errors.telMobile}</span>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Mailing Address</label>
                      <input type="text" name="mailingAddress" value={formData.mailingAddress} onChange={handleChange} className="form-input" placeholder="Full address" />
                    </div>

                    <div className={styles.formRow3}>
                      <div className="form-group">
                        <label className="form-label">City *</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} className={`form-input ${errors.city ? styles.inputError : ''}`} placeholder="City" />
                        {errors.city && <span className="form-error">{errors.city}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label">State *</label>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} className={`form-input ${errors.state ? styles.inputError : ''}`} placeholder="State" />
                        {errors.state && <span className="form-error">{errors.state}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label">Postal Code</label>
                        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className="form-input" placeholder="PIN code" />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label">GST Registration No.</label>
                        <input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} className="form-input" placeholder="GST number" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Entity Type</label>
                        <select name="entityType" value={formData.entityType} onChange={handleChange} className="form-select">
                          <option value="">Select entity type</option>
                          <option value="private">Private & Limited Liability</option>
                          <option value="public">Publicly Limited</option>
                          <option value="llp">Limited Liability Partnership</option>
                          <option value="other">Others</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label">No. of Employees</label>
                        <input type="text" name="numberOfEmployees" value={formData.numberOfEmployees} onChange={handleChange} className="form-input" placeholder="Number" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Any Reference</label>
                        <input type="text" name="reference" value={formData.reference} onChange={handleChange} className="form-input" placeholder="Reference name" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Main Business Activities</label>
                      <textarea name="mainBusiness" value={formData.mainBusiness} onChange={handleChange} className="form-textarea" placeholder="Describe your main business activities" rows={3} />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Franchise Information */}
                {currentStep === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                    <h3 className={styles.stepTitle}>II. Franchise Information</h3>

                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label">1st Choice Area/Country *</label>
                        <input type="text" name="areaChoice1" value={formData.areaChoice1} onChange={handleChange} className={`form-input ${errors.areaChoice1 ? styles.inputError : ''}`} placeholder="Preferred area" />
                        {errors.areaChoice1 && <span className="form-error">{errors.areaChoice1}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label">2nd Choice Area/Country</label>
                        <input type="text" name="areaChoice2" value={formData.areaChoice2} onChange={handleChange} className="form-input" placeholder="Alternative area" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Franchise Rights Interest</label>
                      <div className={styles.radioGroup}>
                        {['Master Franchise', 'Area Franchise'].map(opt => (
                          <label key={opt} className={styles.radioLabel}>
                            <input type="radio" name="franchiseRights" value={opt} checked={formData.franchiseRights === opt} onChange={handleChange} />
                            <span className={styles.radioCustom} />{opt}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Why are you interested in JC SRS Centre franchise?</label>
                      <textarea name="whyInterested" value={formData.whyInterested} onChange={handleChange} className="form-textarea" rows={3} placeholder="Your motivation..." />
                    </div>

                    <div className="form-group">
                      <label className="form-label">How did you hear about us?</label>
                      <input type="text" name="howHeard" value={formData.howHeard} onChange={handleChange} className="form-input" placeholder="Source" />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Do you have access to commercial properties?</label>
                      <textarea name="propertyAccess" value={formData.propertyAccess} onChange={handleChange} className="form-textarea" rows={2} placeholder="Details about property access..." />
                    </div>

                    <h4 style={{ marginBottom: 16, marginTop: 24 }}>Past Business Experience</h4>
                    <div className={styles.formRow3}>
                      <div className="form-group">
                        <label className="form-label">Retail of F&B?</label>
                        <select name="retailFB" value={formData.retailFB} onChange={handleChange} className="form-select">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Manufacturing/Distribution?</label>
                        <select name="manufacturingFB" value={formData.manufacturingFB} onChange={handleChange} className="form-select">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Other Retail?</label>
                        <select name="otherRetail" value={formData.otherRetail} onChange={handleChange} className="form-select">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Business Details (if applicable)</label>
                      <textarea name="businessDetails" value={formData.businessDetails} onChange={handleChange} className="form-textarea" rows={3} placeholder="Company name, brand, products/services..." />
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Investment */}
                {currentStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                    <h3 className={styles.stepTitle}>III. Investment Capital</h3>

                    <div className="form-group">
                      <label className="form-label">Funds available to invest</label>
                      <div className={styles.radioGroup} style={{ flexDirection: 'column' }}>
                        {['₹50,000 to ₹1,00,000', '₹2,00,000 to ₹10,00,000', 'Above ₹10,00,001'].map(opt => (
                          <label key={opt} className={styles.radioLabel}>
                            <input type="radio" name="investmentRange" value={opt} checked={formData.investmentRange === opt} onChange={handleChange} />
                            <span className={styles.radioCustom} />{opt}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formRow3}>
                      <div className="form-group">
                        <label className="form-label">Area more than 650 sq.ft?</label>
                        <select name="areaOver650" value={formData.areaOver650} onChange={handleChange} className="form-select">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Complete office setup?</label>
                        <select name="officeSetup" value={formData.officeSetup} onChange={handleChange} className="form-select">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Have 2 & 4 wheelers?</label>
                        <select name="vehicles" value={formData.vehicles} onChange={handleChange} className="form-select">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>

                    <h4 style={{ marginBottom: 16, marginTop: 24 }}>IV. Other Information</h4>

                    <div className="form-group">
                      <label className="form-label">Willing to set up a separate entity for JC SRS Centre?</label>
                      <div className={styles.radioGroup}>
                        {['Yes', 'No'].map(opt => (
                          <label key={opt} className={styles.radioLabel}>
                            <input type="radio" name="separateEntity" value={opt} checked={formData.separateEntity === opt} onChange={handleChange} />
                            <span className={styles.radioCustom} />{opt}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Additional information about your suitability</label>
                      <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="form-textarea" rows={3} placeholder="Additional relevant information..." />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Why is your chosen location suitable for JC SRS Centre?</label>
                      <textarea name="locationReason" value={formData.locationReason} onChange={handleChange} className="form-textarea" rows={3} placeholder="Location assessment reasons..." />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                    <h3 className={styles.stepTitle}>Review & Submit</h3>

                    <div className={styles.reviewGrid}>
                      <div className={styles.reviewSection}>
                        <h4>Applicant Information</h4>
                        <div className={styles.reviewItem}><span>Name:</span><strong>{formData.applicantName || '-'}</strong></div>
                        <div className={styles.reviewItem}><span>Email:</span><strong>{formData.email || '-'}</strong></div>
                        <div className={styles.reviewItem}><span>Mobile:</span><strong>{formData.telMobile || '-'}</strong></div>
                        <div className={styles.reviewItem}><span>City:</span><strong>{formData.city || '-'}</strong></div>
                        <div className={styles.reviewItem}><span>State:</span><strong>{formData.state || '-'}</strong></div>
                        <div className={styles.reviewItem}><span>Entity Type:</span><strong>{formData.entityType || '-'}</strong></div>
                      </div>
                      <div className={styles.reviewSection}>
                        <h4>Franchise Information</h4>
                        <div className={styles.reviewItem}><span>1st Choice:</span><strong>{formData.areaChoice1 || '-'}</strong></div>
                        <div className={styles.reviewItem}><span>2nd Choice:</span><strong>{formData.areaChoice2 || '-'}</strong></div>
                        <div className={styles.reviewItem}><span>Rights:</span><strong>{formData.franchiseRights || '-'}</strong></div>
                        <div className={styles.reviewItem}><span>Investment:</span><strong>{formData.investmentRange || '-'}</strong></div>
                        <div className={styles.reviewItem}><span>Office Setup:</span><strong>{formData.officeSetup || '-'}</strong></div>
                      </div>
                    </div>

                    <div className={styles.declarationBox}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} className={styles.checkbox} />
                        <span className={styles.checkboxCustom}>
                          {formData.declaration && <HiCheckCircle />}
                        </span>
                        <span>
                          I confirm my genuine interest in the JC SRS Centre Franchise and declare that all
                          information provided herein is true and accurate. I understand that any misrepresentation
                          may affect the outcome of the franchise grant.
                        </span>
                      </label>
                      {errors.declaration && <span className="form-error">{errors.declaration}</span>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className={styles.formNav}>
                {currentStep > 1 && (
                  <button type="button" className="btn btn-outline" onClick={prevStep}>
                    <HiArrowLeft /> Previous
                  </button>
                )}
                <div style={{ flex: 1 }} />
                {currentStep < 4 ? (
                  <button type="button" className="btn btn-primary" onClick={nextStep}>
                    Next Step <HiArrowRight />
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary btn-pulse">
                    Submit Application <HiCheckCircle />
                  </button>
                )}
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
