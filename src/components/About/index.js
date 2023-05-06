import React from "react";
import YardSharpIcon from '@mui/icons-material/YardSharp';
export default function About() {
  return (
    <>

      <section id='about' class='about'>
        <div class='container-fluid'>
          <div class='row'>
            <div
              class='col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch aos-init aos-animate'
              data-aos='fade-right'
            >
              <a
                href='https://www.youtube.com/watch?v=StpBR2W8G5A'
                class='glightbox play-btn mb-4'
              ></a>
            </div>
            <div
              class='col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5 aos-init aos-animate'
              data-aos='fade-left'
            >
              <p>
                Welcome to{" "}
                <a href='https://igniteresearch.in'>Ignite Research</a>, where
                we are dedicated to transforming the industries through
                innovation and excellence. Our flagship medical product,{" "}
                <a href='https://medrec.co.in'>MedRec</a>, is a medical record
                management software that enables healthcare providers to access
                and manage patient records seamlessly, without compromising on
                data security and streamline your operations, improve
                productivity, and enhance patient outcomes. Our software is
                simple, secure, and cost-effective, making it the ideal choice
                for healthcare providers looking to simplify their workflows.
              </p>
              <p>
                <a href='https://medrec.co.in'>MedRec</a> is the brainchild of
                our CEO, Gandikota Ramagopal, whose vision was to simplify
                medical record management for clinics. Our team of passionate
                professionals has worked tirelessly to create a user-friendly
                and customizable platform that empowers healthcare providers to
                deliver better patient care.
              </p>
              <p>
                Join us in revolutionizing the medical industry with innovative
                solutions that make healthcare accessible and affordable for
                all. Choose Ignite Research for all your medical record
                management needs  <a href="/about" class="btn-get-started scrollto">read more.......</a>
              </p>
              

              <div
                class='icon-box aos-init aos-animate'
                data-aos='zoom-in'
                data-aos-delay='100'
              >
                <div class='icon'>
                  <i class='bx bx-fingerprint'></i>
                </div>
                <h4 class='title'>
                  <a href=''>Vision</a>
                </h4>
                <p class='description'>
                  To revolutionize the medical industry with innovative
                  solutions that simplify processes and improve patient
                  outcomes.
                </p>
              </div>

              <div
                class='icon-box aos-init aos-animate'
                data-aos='zoom-in'
                data-aos-delay='200'
              >
                <div class='icon'>
                  <i class='bx bx-book-add'></i>
                </div>
                <h4 class='title'>
                  <a href=''>Mission</a>
                </h4>
                <p class='description'>
                  Empower healthcare providers with cost-effective and secure
                  tools that enable informed decision-making and better patient
                  care.
                </p>
              </div>

              <div
                class='icon-box aos-init aos-animate'
                data-aos='zoom-in'
                data-aos-delay='300'
              >
                <div class='icon'>
                  <i class='bx bx-atom'></i>
                </div>
                <h4 class='title'>
                  <a href=''>Objectives</a>
                </h4>
                <p class='description'>
                  Deliver high-quality, user-friendly, and customizable software
                  solutions that streamline medical record management and
                  enhance productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
