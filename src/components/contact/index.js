import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Typography from "../Typography";
import style from "../../pages/index.module.css";


export default function ContactUs() {
  return (
    <>
      <section id='services' style={{ marginTop: 30 }}>
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
