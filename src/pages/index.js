import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from '../components/Testimonial';
import Pricing from '../components/Pricing';
import FAQs from '../components/FAQs';
import Details from '../components/Details';
import ContactUs from '../components/Contact';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description='Description will go into a meta tag in <head />'
      >
        <main>
          <Hero />
          <About />
          <Features />
          <Details/>
          <Testimonials/>
          <Pricing/>
          <FAQs/>
          <ContactUs/>
         
        </main>
      </Layout>

      {/* <Layout
        title={`Hello from ${siteConfig.title}`}
        description='Description will go into a meta tag in <head />'
      >
        
        <main>
          <HomepageFeatures />
        </main>
      </Layout> */}
    </>
  );
}
