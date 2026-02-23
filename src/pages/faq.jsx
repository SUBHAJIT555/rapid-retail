import React from 'react';
import SEO from '@/components/seo';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import Wrapper from '@/layout/wrapper';
import CommonBreadcrumb from '@/components/breadcrumb/common-breadcrumb';
import FaqArea from '@/components/faq/faq-area';

const FAQPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="FAQ" />
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="FAQ" subtitle="Frequently Asked Questions" center={true} />
      <FaqArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default FAQPage;
