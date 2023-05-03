import React from "react";

export default function Testimonials() {
  return (
    <>
      <section id='testimonials' class='testimonials'>
        <div class='container'>
          <div
            class='testimonials-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events aos-init aos-animate'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <div
              class='swiper-wrapper'
              id='swiper-wrapper-576c4bc4740dae9f'
              aria-live='off'
              style={{
                transform:
                  "translate3d(-6960px, 0px, 0px); transition-duration: 0ms;",
              }}
            >
              <div
                class='swiper-slide swiper-slide-duplicate'
                data-swiper-slide-index='0'
                role='group'
                aria-label='1 / 5'
              >
                <div class='testimonial-item'>
                  <img
                    src='assets/img/testimonials/testimonials-1.jpg'
                    class='testimonial-img'
                    alt=''
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i class='bx bxs-quote-alt-left quote-icon-left'></i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i class='bx bxs-quote-alt-right quote-icon-right'></i>
                  </p>
                </div>
              </div>

              </div>

            <span
              class='swiper-notification'
              aria-live='assertive'
              aria-atomic='true'
            ></span>
          </div>
        </div>
      </section>
    </>
  );
}
