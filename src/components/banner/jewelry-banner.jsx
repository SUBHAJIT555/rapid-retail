import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
// internal
import slider_img_1 from "@assets/img/slider/4/slider-1.png";
import slider_img_2 from "@assets/img/slider/4/slider-2.png";
import slider_img_3 from "@assets/img/slider/4/slider-3.png";
import slider_img_4 from "@assets/img/slider/4/slider-4.png";
// nav icon
import nav_icon_1 from "@assets/img/slider/4/nav/icon-1.png";
import nav_icon_2 from "@assets/img/slider/4/nav/icon-2.png";
import nav_icon_3 from "@assets/img/slider/4/nav/icon-3.png";
import nav_icon_4 from "@assets/img/slider/4/nav/icon-4.png";
import { ArrowNextTwo, ArrowPrevTwo } from "@/svg";
import Link from "next/link";
import { siteInfo } from "@/data/contact-info";

// slider data – uses siteInfo from contact-info.js
const getSliderData = () => [
  { subtitle: siteInfo.companyName, title: "Your One-Stop Shop", img: slider_img_1 },
  { subtitle: siteInfo.domain, title: "Tech & Smart Gadgets", img: slider_img_2 },
  { subtitle: siteInfo.companyName, title: "Fashion for Everyone", img: slider_img_3 },
  { subtitle: siteInfo.domain, title: "Books, Stationery & More", img: slider_img_4 },
];

// slider nav data – product categories
const slider_nav_data = [
  {
    icon: nav_icon_1,
    title: (
      <>
        Mobile <br />
        Accessories
      </>
    ),
  },
  {
    icon: nav_icon_2,
    title: (
      <>
        Smart <br />
        Gadgets
      </>
    ),
  },
  {
    icon: nav_icon_3,
    title: (
      <>
        Computer <br />
        Accessories
      </>
    ),
  },
  {
    icon: nav_icon_4,
    title: (
      <>
        Home <br />
        Electronics
      </>
    ),
  },
  { icon: nav_icon_1, title: <>Books</> },
  {
    icon: nav_icon_2,
    title: (
      <>
        Stationery <br />
        Items
      </>
    ),
  },
  {
    icon: nav_icon_3,
    title: (
      <>
        Men&apos;s <br />
        Wear
      </>
    ),
  },
  {
    icon: nav_icon_4,
    title: (
      <>
        Women&apos;s <br />
        Wear
      </>
    ),
  },
  {
    icon: nav_icon_1,
    title: (
      <>
        Kids&apos;s <br />
        Wear
      </>
    ),
  },
  {
    icon: nav_icon_2,
    title: (
      <>
        Fashion <br />
        Accessories
      </>
    ),
  },
];

const JewelryBanner = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  //  slider setting
  const main_slider_setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: false,
  };
  // nav slider setting
  const nav_slider_setting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  };

  return (
    <>
      <section className="tp-slider-area p-relative z-index-1 fix">
        <Slider
          {...main_slider_setting}
          asNavFor={slider2}
          ref={(slider) => setSlider1(slider)}
          className="tp-slider-active-4 khaki-bg"
        >
          {getSliderData().map((item, i) => (
            <div
              key={i}
              className="tp-slider-item-4 tp-slider-height-4 p-relative khaki-bg d-flex align-items-center"
            >
              <div className="tp-slider-thumb-4">
                <Image src={item.img} alt="slider img" />
                <div className="tp-slider-thumb-4-shape">
                  <span className="tp-slider-thumb-4-shape-1"></span>
                  <span className="tp-slider-thumb-4-shape-2"></span>
                </div>
              </div>

              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                    <div className="tp-slider-content-4 p-relative z-index-1">
                      <span>{item.subtitle}</span>
                      <h3 className="tp-slider-title-4">{item.title}</h3>
                      <div className="tp-slider-btn-4">
                        <Link
                          href="/shop"
                          className="tp-btn tp-btn-border tp-btn-border-white"
                        >
                          Discover Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* arrow start */}
        <div className="tp-slider-arrow-4">
          <button
            className="tp-slider-3-button-prev slick-arrow"
            onClick={() => slider1?.slickPrev()}
          >
            <ArrowPrevTwo />
          </button>
          <button
            className="tp-slider-3-button-next slick-arrow"
            onClick={() => slider1?.slickNext()}
          >
            <ArrowNextTwo />
          </button>
        </div>
        {/* arrow end */}

        <div className="tp-slider-nav">
          <Slider
            {...nav_slider_setting}
            asNavFor={slider1}
            ref={(slider) => setSlider2(slider)}
            className="tp-slider-nav-active"
          >
            {slider_nav_data.map((item, i) => (
              <div
                key={i}
                className="tp-slider-nav-item d-flex align-items-center"
              >
                <div className="tp-slider-nav-icon">
                  <span>
                    <Image src={item.icon} alt="icon" />
                  </span>
                </div>
                <div className="tp-slider-nav-content">
                  <h3 className="tp-slider-nav-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default JewelryBanner;
