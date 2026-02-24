import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import social_data from '@/data/social-data';
import contactInfo, { siteInfo } from '@/data/contact-info';
import { Email, Location } from '@/svg';
import logo from '@assets/img/logo/logo.svg';
import pay from '@assets/img/footer/footer-pay.png';
import { submitToApi } from '@/lib/submit-api';
import { notifyError, notifySuccess } from '@/utils/toast';

const FooterTwo = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email?.trim() ?? '';
    if (!trimmed) return;
    setSubmitting(true);
    const result = await submitToApi({ formType: 'newsletter', email: trimmed });
    setSubmitting(false);
    if (result.success) {
      notifySuccess('Subscribed successfully!');
      setEmail('');
    } else {
      notifyError(result.error || 'Subscription failed.');
    }
  };

  return (
    <>
      <footer>
        <div className="tp-footer-area tp-footer-style-2 tp-footer-style-3 tp-footer-style-4" data-bg-color="#F5F5F5" style={{ backgroundColor: `rgb(245, 245, 245)` }}>
          <div className="tp-footer-top pt-95 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                  <div className="tp-footer-widget footer-col-4-1 mb-50">
                    <div className="tp-footer-logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                    <div className="tp-footer-widget-content">
                      <div className="tp-footer-talk mb-20">
                        <span>Got Questions? Call us</span>
                        <h4><a href={contactInfo.telLink}>{contactInfo.phone}</a></h4>
                      </div>
                      <div className="tp-footer-contact">
                        <div className="tp-footer-contact-item d-flex align-items-start">
                          <div className="tp-footer-contact-icon">
                            <span>
                              <Email />
                            </span>
                          </div>
                          <div className="tp-footer-contact-content">
                            <p><a href={contactInfo.mailtoLink}>{contactInfo.email}</a></p>
                          </div>
                        </div>
                        <div className="tp-footer-contact-item d-flex align-items-start">
                          <div className="tp-footer-contact-icon">
                            <span>
                              <Location />
                            </span>
                          </div>
                          <div className="tp-footer-contact-content">
                            <p><a href={contactInfo.mapLink} target="_blank" rel="noreferrer">{contactInfo.addressDisplay}</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                  <div className="tp-footer-widget footer-col-4-2 mb-50">
                    <h4 className="tp-footer-widget-title">Quick Links</h4>
                    <div className="tp-footer-widget-content">
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="tp-footer-widget footer-col-4-3 mb-50">
                    <h4 className="tp-footer-widget-title">Legal</h4>
                    <div className="tp-footer-widget-content">
                      <ul>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                        <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
                        <li><Link href="/return-policy">Refund Policy</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div className="tp-footer-widget footer-col-4-4 mb-50">
                    <h4 className="tp-footer-widget-title">Subcribe.</h4>
                    <div className="tp-footer-widget-content">
                      <div className="tp-footer-subscribe">
                        <p>Our conversation is just getting started</p>
                        <div className="tp-footer-subscribe-form mb-30">
                          <form onSubmit={handleNewsletterSubmit}>
                            <div className="tp-footer-subscribe-input">
                              <input
                                type="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={submitting}
                              />
                              <button type="submit" disabled={submitting}>
                                {submitting ? 'Sending…' : 'Subscribe'}
                              </button>
                            </div>
                          </form>
                        </div>
                        {/* <div className="tp-footer-social-4 tp-footer-social">
                          <h4 className="tp-footer-social-title-4">Follow Us On</h4>
                          {social_data.map(s => <a href={s.link} key={s.id} target="_blank">
                            <i className={s.icon}></i>
                          </a>
                          )}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-footer-bottom">
            <div className="container">
              <div className="tp-footer-bottom-wrapper">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="tp-footer-copyright">
                      <p>© {new Date().getFullYear()} {siteInfo.companyName}. All Rights Reserved.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tp-footer-payment text-md-end">
                      <p>
                        <Image src={pay} alt="pay" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;