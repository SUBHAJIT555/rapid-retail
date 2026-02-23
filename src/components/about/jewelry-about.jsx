import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import about_img from "@assets/img/about/about-1.jpg";
import about_thumb from "@assets/img/about/about-2.jpg";
import { ArrowRightLong } from "@/svg";

const JewelryAbout = () => {
  return (
    <>
      <section className="tp-about-area pt-125 pb-180">
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
                    rapid-retail.com
                  </span>
                  <h3 className="tp-section-title-4 fz-50">
                    Your One-Stop Shop for Tech, Fashion & More
                  </h3>
                </div>
                <div className="tp-about-content pl-120">
                  <p>
                    At <strong>Rapid Retail</strong>, we bring you a wide range
                    of products in one place. From{" "}
                    <strong>mobile accessories</strong> and{" "}
                    <strong>smart gadgets</strong> to <strong>computer</strong>{" "}
                    and <strong>home electronics</strong>, plus{" "}
                    <strong>books</strong>, <strong>stationery</strong>,{" "}
                    <strong>men&apos;s</strong>, <strong>women&apos;s</strong>{" "}
                    and <strong>kids wear</strong>, and{" "}
                    <strong>fashion accessories</strong>—everything you need,
                    delivered fast.
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
    </>
  );
};

export default JewelryAbout;
