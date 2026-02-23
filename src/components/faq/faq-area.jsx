import React, { useState } from 'react';
import contactInfo from '@/data/contact-info';

const faqData = (email) => [
  {
    id: 1,
    question: 'How do I request a quote for jewelry?',
    answer: 'Browse our Shop, add the items you are interested in to your cart, and use the "Request Quote" option at checkout. We will review your request and send you a personalized quote by email within 1–2 business days.',
  },
  {
    id: 2,
    question: 'Do you offer custom or personalized jewelry?',
    answer: 'Yes. We can work with you on custom designs and personalization such as engraving. Please include your requirements when requesting a quote or contact us directly with your ideas.',
  },
  {
    id: 3,
    question: 'What is your shipping policy?',
    answer: 'Shipping options and delivery times depend on your location and the items ordered. We will include shipping details and estimated delivery in your quote. Contact us for specific shipping questions.',
  },
  {
    id: 4,
    question: 'How can I contact you?',
    answer: `You can reach us via the Contact page, by email at ${email}, or by phone. We are happy to help with quotes, product questions, or any other inquiries.`,
  },
  {
    id: 5,
    question: 'What is your return or refund policy?',
    answer: 'We want you to be fully satisfied. Our Refund Policy covers returns, exchanges, and refunds. Please see our Refund Policy page for eligibility, timeframes, and how to initiate a return.',
  },
  {
    id: 6,
    question: 'Do I need an account to request a quote?',
    answer: 'No. We operate on a request-for-quote basis. You can add items to your cart and request a quote without creating an account. We will communicate with you via the contact details you provide.',
  },
];

const FaqArea = () => {
  const [openId, setOpenId] = useState(null);
  const faqs = faqData(contactInfo.email);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <section className="tp-terms-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-terms-wrapper">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <h3 className="tp-section-title-4 mb-20">Frequently Asked Questions</h3>
                </div>
                <div className="tp-faq-content">
                  {faqs.map((item) => (
                    <div
                      key={item.id}
                      className={`tp-faq-item mb-15 ${openId === item.id ? 'active' : ''}`}
                      style={{
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        overflow: 'hidden',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(item.id)}
                        className="tp-faq-question w-100 text-start d-flex align-items-center justify-content-between p-4"
                        style={{
                          background: openId === item.id ? '#f9f9f9' : '#fff',
                          border: 'none',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: 'var(--tp-heading-secondary)',
                          cursor: 'pointer',
                        }}
                      >
                        {item.question}
                        <span style={{ fontSize: '20px', transition: 'transform 0.2s', transform: openId === item.id ? 'rotate(180deg)' : 'rotate(0)' }}>
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </button>
                      <div
                        className="tp-faq-answer"
                        style={{
                          maxHeight: openId === item.id ? '500px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.3s ease',
                        }}
                      >
                        <p className="p-4 pt-0 mb-0" style={{ fontSize: '15px', lineHeight: '1.8', color: '#555' }}>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;
