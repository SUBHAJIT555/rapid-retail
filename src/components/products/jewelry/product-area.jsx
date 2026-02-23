import ErrorMsg from '@/components/common/error-msg';
import { useGetProductsByVariantQuery } from '@/redux/features/productApi';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import ProductItem from './product-item';
import { HomeTwoPrdLoader } from '@/components/loader';
import { ArrowRight } from '@/svg';
import { getSiteNumber } from '@/lib/siteConfig';

/**
 * Product Collection Component with Automatic Variant Detection
 * Variant ID is automatically calculated from SITE_NUMBER using modulo 10
 * @param {string} defaultCategory - Default active category tab (default: 'All Collection')
 */
const ProductArea = ({ defaultCategory = 'All Collection' }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(defaultCategory);
  const [categoryCounts, setCategoryCounts] = useState({});
  const activeRef = useRef(null);
  const marker = useRef(null);
  
  // Automatically calculate variantId from SITE_NUMBER using modulo 10
  // SITE_NUMBER 1-10 → variants 1-10
  // SITE_NUMBER 11-20 → variants 1-10 (11%10=1, 12%10=2, etc.)
  // SITE_NUMBER 10, 20, 30, 40 → variant 10 (0 % 10 = 0, so we use 10)
  const variantId = useMemo(() => {
    try {
      const siteNumber = getSiteNumber();
      const mod = siteNumber % 10;
      // If modulo is 0 (e.g., siteNumber is 10, 20, 30, 40), use variant 10
      const calculatedVariant = mod === 0 ? 10 : mod;
      console.log(`ProductArea - SITE_NUMBER: ${siteNumber}, Calculated Variant ID: ${calculatedVariant}`);
      return calculatedVariant;
    } catch (error) {
      console.warn('Error getting site number, using default variant 1:', error);
      return 1;
    }
  }, []);
  
  // Get variant configuration
  const { data: productsData, isError, isLoading } = useGetProductsByVariantQuery({ 
    variantId,
    category: activeTab,
  });
  
  const variantConfig = productsData?.variantConfig;
  const tabs = variantConfig?.tabs || ["All Collection", "Man Wear", "Women Wear", "Kids Wear"];
  const title = variantConfig?.title || "Discover our Products";
  const subtitle = variantConfig?.subtitle || "Product Collection";
  
  // Fetch counts for all categories on mount and when activeTab changes
  useEffect(() => {
    if (productsData?.totalCount !== undefined) {
      setCategoryCounts(prev => ({
        ...prev,
        [activeTab]: productsData.totalCount
      }));
    }
  }, [activeTab, productsData?.totalCount]);
  
  // Get total count for a specific tab
  const getCategoryCount = (tab) => {
    return categoryCounts[tab] || (tab === activeTab ? (productsData?.totalCount || 0) : 0);
  };
  
  // handleActiveTab
  useEffect(() => {
    // Position the marker after the active tab has been updated
    if (activeRef.current && marker.current) {
      marker.current.style.left = activeRef.current.offsetLeft + "px";
      marker.current.style.width = activeRef.current.offsetWidth + "px";
    }
  }, [activeTab, productsData]);

  const handleActiveTab = (e, tab) => {
    setActiveTab(tab);
  };

  // Handle "Show More" button click
  const handleShowMore = () => {
    if (!variantConfig) return;
    
    const categoryConfig = variantConfig.categoryMap[activeTab];
    
    if (activeTab === 'All Collection' || !categoryConfig?.slug) {
      // Redirect to shop page without category filter
      router.push('/shop');
    } else {
      // Redirect to shop page with selected category
      router.push(`/shop?category=${categoryConfig.slug}`);
    }
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeTwoPrdLoader loading={isLoading} />
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && productsData?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && productsData?.data?.length > 0) {
    // Products are already filtered and limited to 8 by the API
    const product_items = productsData.data;
    content = <>
      <div className="row align-items-end">
        <div className="col-xl-6 col-lg-6">
          <div className="tp-section-title-wrapper-4 mb-40 text-center text-lg-start">
            <span className="tp-section-title-pre-4">{subtitle}</span>
            <h3 className="tp-section-title-4">{title}</h3>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="tp-product-tab-2 tp-product-tab-3  tp-tab mb-45">
            <div className="tp-product-tab-inner-3 d-flex align-items-center justify-content-center justify-content-lg-end">
              <nav>
                <div className="nav nav-tabs justify-content-center tp-product-tab tp-tab-menu p-relative" id="nav-tab" role="tablist">

                  {tabs.map((tab, i) => {
                    // Show total count for each tab
                    const displayCount = getCategoryCount(tab);
                    
                    return (
                      <button
                        key={i}
                        ref={activeTab === tab ? activeRef : null}
                        onClick={(e) => handleActiveTab(e, tab)}
                        className={`nav-link text-capitalize ${activeTab === tab ? "active" : ""}`}
                      >
                        {tab.split("-").join(" ")}
                        <span className="tp-product-tab-tooltip">{displayCount}</span>
                      </button>
                    );
                  })}

                  <span ref={marker} id="productTabMarker" className="tp-tab-line d-none d-sm-inline-block"></span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {product_items.map((prd) => (
          <div key={prd._id} className="col-xl-3 col-lg-4 col-sm-6">
            <ProductItem product={prd} />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12 text-center mt-40">
          <button
            onClick={handleShowMore}
            className="tp-btn tp-btn-border tp-btn-border-sm"
          >
            Show More
            <span className="ms-2">
              <ArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  }


  return (
    <>
      <section className="tp-product-area pt-115 pb-80">
        <div className="container">
          {content}
        </div>
      </section>
    </>
  );
};

export default ProductArea;
