import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import about_img from "@assets/img/about/about-1.jpg";
import about_thumb from "@assets/img/about/about-2.jpg";
import { ArrowRightLong } from "@/svg";
import FeatureAreaThree from "@/components/features/feature-area-3";
import { siteInfo } from "@/data/contact-info";

const AboutArea = () => {
  return (
    <>
      {/* about story section start */}
      <section className="tp-about-area pt-125 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-about-thumb-wrapper p-relative mr-35">
                <div className="tp-about-thumb m-img">
                  <Image src={about_img} alt="about_img" />
                </div>
                <div className="tp-about-thumb-2">
                  <Image src={about_thumb} alt="about_thumb" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="tp-about-wrapper pl-80 pt-75 pr-60">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <span className="tp-section-title-pre-4">
                    {siteInfo.domain}
                  </span>
                  <h3 className="tp-section-title-4 fz-50">
                    {siteInfo.tagline}
                  </h3>
                </div>
                <div className="tp-about-content pl-120">
                  <p>
                    Welcome to <strong>{siteInfo.companyName}</strong>, where
                    you can find everything from mobile accessories and smart
                    gadgets to computer and home electronics, books, stationery,
                    men&apos;s and women&apos;s and kids wear, and fashion
                    accessories—all in one place.
                  </p>
                  <p className="mb-30">
                    We believe shopping should be simple and fast. We curate
                    quality products across tech, fashion, and everyday
                    essentials so you get the best selection and service.
                    Whether you need the latest gadgets, a new read, or style
                    for the whole family, we&apos;re here to deliver.
                  </p>
                  <div className="tp-about-btn">
                    <Link href="/contact" className="tp-btn">
                      Contact Us <ArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about story section end */}

      {/* mission section start */}
      <section className="tp-about-mission-area grey-bg-7 pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper-4 text-center mb-60">
                <span className="tp-section-title-pre-4">
                  {siteInfo.companyName}
                </span>
                <h3 className="tp-section-title-4">What We Stand For</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-about-mission-item text-center">
                <div className="tp-about-mission-icon mb-30">
                  <span
                    className="tp-about-mission-icon-wrapper"
                    style={{
                      fontSize: "60px",
                      color: "var(--tp-theme-primary)",
                    }}
                  >
                    ✨
                  </span>
                </div>
                <h4
                  className="tp-about-mission-title mb-15"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  Quality First
                </h4>
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  We stock trusted brands and genuine products across tech,
                  fashion, and essentials so you can shop with confidence.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-about-mission-item text-center">
                <div className="tp-about-mission-icon mb-30">
                  <span
                    className="tp-about-mission-icon-wrapper"
                    style={{
                      fontSize: "60px",
                      color: "var(--tp-theme-primary)",
                    }}
                  >
                    💎
                  </span>
                </div>
                <h4
                  className="tp-about-mission-title mb-15"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  Customer Satisfaction
                </h4>
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  Your happiness is our priority. We&apos;re committed to smooth
                  orders, quick support, and a hassle-free shopping experience.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-about-mission-item text-center">
                <div className="tp-about-mission-icon mb-30">
                  <span
                    className="tp-about-mission-icon-wrapper"
                    style={{
                      fontSize: "60px",
                      color: "var(--tp-theme-primary)",
                    }}
                  >
                    ⏰
                  </span>
                </div>
                <h4
                  className="tp-about-mission-title mb-15"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  Wide Range
                </h4>
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  From mobile accessories and smart gadgets to fashion, books,
                  and stationery—find what you need in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mission section end */}

      {/* why choose us section start */}
      <section className="tp-about-choose-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-about-choose-content">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <span className="tp-section-title-pre-4">Why Choose Us</span>
                  <h3 className="tp-section-title-4">
                    Excellence in Every Detail
                  </h3>
                </div>
                <div className="tp-about-choose-list">
                  <div className="tp-about-choose-item d-flex align-items-start mb-30">
                    <div
                      className="tp-about-choose-icon mr-20"
                      style={{
                        minWidth: "30px",
                        color: "var(--tp-theme-primary)",
                      }}
                    >
                      <span style={{ fontSize: "24px" }}>✓</span>
                    </div>
                    <div className="tp-about-choose-content-text">
                      <h5
                        className="mb-10"
                        style={{ fontSize: "20px", fontWeight: "600" }}
                      >
                        Genuine Products
                      </h5>
                      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        We offer authentic tech, fashion, and lifestyle products
                        from trusted brands so you shop with confidence.
                      </p>
                    </div>
                  </div>
                  <div className="tp-about-choose-item d-flex align-items-start mb-30">
                    <div
                      className="tp-about-choose-icon mr-20"
                      style={{
                        minWidth: "30px",
                        color: "var(--tp-theme-primary)",
                      }}
                    >
                      <span style={{ fontSize: "24px" }}>✓</span>
                    </div>
                    <div className="tp-about-choose-content-text">
                      <h5
                        className="mb-10"
                        style={{ fontSize: "20px", fontWeight: "600" }}
                      >
                        One-Stop Shop
                      </h5>
                      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        Mobile accessories, smart gadgets, electronics, books,
                        stationery, and fashion—all in one place.
                      </p>
                    </div>
                  </div>
                  <div className="tp-about-choose-item d-flex align-items-start mb-30">
                    <div
                      className="tp-about-choose-icon mr-20"
                      style={{
                        minWidth: "30px",
                        color: "var(--tp-theme-primary)",
                      }}
                    >
                      <span style={{ fontSize: "24px" }}>✓</span>
                    </div>
                    <div className="tp-about-choose-content-text">
                      <h5
                        className="mb-10"
                        style={{ fontSize: "20px", fontWeight: "600" }}
                      >
                        Reliable Support
                      </h5>
                      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        We stand behind our products with clear policies and
                        responsive customer support when you need it.
                      </p>
                    </div>
                  </div>
                  <div className="tp-about-choose-item d-flex align-items-start">
                    <div
                      className="tp-about-choose-icon mr-20"
                      style={{
                        minWidth: "30px",
                        color: "var(--tp-theme-primary)",
                      }}
                    >
                      <span style={{ fontSize: "24px" }}>✓</span>
                    </div>
                    <div className="tp-about-choose-content-text">
                      <h5
                        className="mb-10"
                        style={{ fontSize: "20px", fontWeight: "600" }}
                      >
                        Fast & Easy
                      </h5>
                      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        Simple checkout, secure payment options, and delivery so
                        you get your orders without hassle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-about-choose-thumb">
                <Image src={about_img} alt="about choose" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why choose us section end */}

      {/* features section start */}
      <FeatureAreaThree />
      {/* features section end */}
    </>
  );
};

export default AboutArea;
