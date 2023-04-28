import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Typography from "../Typography";
import style from "../../pages/index.module.css";

const FeatureList = [
  {
    title: "Medical Record",
    Svg: "img/features/clinic-detailed-medical-history.svg",
    description: (
      <>
        Our medical record feature is designed to securely store and quickly
        access your vital health information anytime, anywhere
      </>
    ),
  },
  {
    title: "Treatment History",
    Svg: "img/features/clinic-patient-list.svg",
    description: (
      <>
        Keep track of your medical history with our treatment tracker, so you
        never forget an important detail about your healthcare journey
      </>
    ),
  },
  {
    title: "Stats & Treatments",
    Svg: "/img/features/clinic-customizable-settings.svg",
    description: (
      <>
        Monitor your health progress with our stats tracker and get personalized
        treatment recommendations to help you achieve your health goals
      </>
    ),
  },
  {
    title: "Personal Health Record",
    Svg: "/img/features/clinic-bookings-and-payments.svg",
    description: (
      <>
        Access your complete health history in one secure location with our
        personal health record, and take control of your healthcare like never
        before
      </>
    ),
  },
  {
    title: "Remote Access",
    Svg: "/img/features/clinic-video-and-voice-calls.svg",
    description: (
      <>
        Stay connected to your healthcare providers from anywhere with our
        remote access feature, and get the care you need without leaving your
        home
      </>
    ),
  },
  {
    title: "Appointments & Reminders",
    Svg: "img/features/clinic-appointments-calendar.svg",
    description: (
      <>
        Never miss an appointment or medication dose again with our appointments
        and reminders feature, designed to keep you on track and healthy
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className='text--center'>
        <img className={styles.featureSvg} src={Svg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <Typography variant='body1' align='justify'>
          {description}
        </Typography>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section id='services' style={{ marginTop: 30}}>
        <div>
          <Typography
            variant='h3'
            align='center'
            className={style.sectionTitle}
          >
            <strong>Our Services</strong>
          </Typography>
          <div className={styles.features}>
            <div className='container'>
              <div className='row'>
                {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
