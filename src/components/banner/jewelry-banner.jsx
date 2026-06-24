import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
// internal
import { ArrowNextTwo, ArrowPrevTwo } from "@/svg";
import Link from "next/link";
import { siteInfo } from "@/data/contact-info";
import categoryData from "@/constatns/categoryData";

const formatNavTitle = (title) => {
  const titleMap = {
    "Mobile Accessories": (
      <>
        Mobile <br />
        Accessories
      </>
    ),
    "Smart Gadgets": (
      <>
        Smart <br />
        Gadgets
      </>
    ),
    "Computer Accessories": (
      <>
        Computer <br />
        Accessories
      </>
    ),
    "Home Electronics": (
      <>
        Home <br />
        Electronics
      </>
    ),
    Books: <>Books</>,
    Stationery: (
      <>
        Stationery <br />
        Items
      </>
    ),
    "Men's Wear": (
      <>
        Men&apos;s <br />
        Wear
      </>
    ),
    "Women's Wear": (
      <>
        Women&apos;s <br />
        Wear
      </>
    ),
    "Kids's Wear": (
      <>
        Kids&apos;s <br />
        Wear
      </>
    ),
    "Fashion Accessories": (
      <>
        Fashion <br />
        Accessories
      </>
    ),
  };
  return titleMap[title] ?? title;
};

const getSliderData = () =>
  categoryData.map((cat, i) => ({
    subtitle: i % 2 === 0 ? siteInfo.companyName : siteInfo.domain,
    title: cat.title === "Stationery" ? "Stationery Items" : cat.title,
    img: cat.img,
  }));

const slider_nav_data = categoryData.map((cat) => ({
  icon: cat.img,
  title: formatNavTitle(cat.title),
}));

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
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={600}
                  priority={i === 0}
                  style={{ objectFit: "contain" }}
                />
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
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={48}
                      height={48}
                      style={{ objectFit: "cover", borderRadius: "4px" }}
                    />
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
