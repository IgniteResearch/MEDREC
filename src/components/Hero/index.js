import { Stack } from "@mui/material";
import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from '@mui/material/Avatar';

export default function Hero() {
  return (
    <>
      <section id='hero'>
        <div class='container'>
          <div class='row justify-content-between'>
            <div class='col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center'>
              <div data-aos='zoom-out' class='aos-init aos-animate'>
                <Stack direction={"row"}>
                <Avatar src="/img/ranked-one.png"  style={{ width: 60}}/>
                  {/* <img
                    src='/img/ranked-one.png'
                    class='img-fluid animated'
                    alt=''
                    width={60}
                    style={{ marginLeft: "-9%" }}
                  /> */}
                  <h1>Secure Medical Bank</h1>
                </Stack>
                <Stack direction={"row"} spacing={10}> 
                <h2>
                  {" "}
                 <span>Pay Just </span> 
                  ₹ <strong>1</strong>/ <strong>10</strong> entries{" "}
                  <Chip
                    label='Pay As You Go'
                    variant='outlined'
                    style={{ 
                      "backgroundColor": "transparent",
                      "border": "1px solid yellow",
                      "color": "white",
                      "margin": "10px"
                    }}
                  />
                   <Chip
                    label='Certified Secure App'
                    style={{ 
                      "backgroundColor": "transparent",
                      "border": "1px solid yellow",
                      "color": "white",
                      "margin": "10px"
                    }}
                    variant='outlined'
                    avatar={<Avatar src="/img/certificate.png" />}
                  />
                 
                </h2>
                </Stack>
                <div class='text-center text-lg-start'>
                  <a href='#about' class='btn-get-started scrollto'>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div
              class='col-lg-4 order-1 order-lg-2 hero-img aos-init aos-animate'
              data-aos='zoom-out'
              data-aos-delay='300'
            >
              <img src='/img/hero.png'  width={"450px"}  class='img-fluid animated' alt='' />
            </div>
          </div>
        </div>

        <svg
          class='hero-waves'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28 '
          preserveAspectRatio='none'
        >
          <defs>
            <path
              id='wave-path'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            ></path>
          </defs>
          <g class='wave1'>
            <use
              xlinkHref='#wave-path'
              x='50'
              y='3'
              fill='rgba(255,255,255, .1)'
            ></use>
          </g>
          <g class='wave2'>
            <use
              xlinkHref='#wave-path'
              x='50'
              y='0'
              fill='rgba(255,255,255, .2)'
            ></use>
          </g>
          <g class='wave3'>
            <use xlinkHref='#wave-path' x='50' y='9' fill='#fff'></use>
          </g>
        </svg>
      </section>
    </>
  );
}
