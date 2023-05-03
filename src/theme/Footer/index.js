import React from "react";

function Footer() {
  return (
    <>
      <footer id='footer'>
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='footer-info'>
                <a href="index.html"><img src="/img/logo.png" width="50"  alt="" className="img-fluid" /></a>
                  <h3>MedRec</h3>
                  <p className='pb-3'>
                    <em>
                      A Secure Medical Record Bank
                    </em>
                  </p>
                  <p>
                    27-2-769, 3rd Street <br />
                    A C Nagar, Nellore, AP, India
                    <br />
                    <br />
                    <strong>Phone:</strong> +91 630 143 6533
                    <br />
                    <strong>Email:</strong> info@igniteresearch.in
                    <br />
                  </p>
                  <div className='social-links mt-3'>
                    <a href='#' className='twitter'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                    <a href='#' className='facebook'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                    <a href='#' className='instagram'>
                      <i className='bx bxl-instagram'></i>
                    </a>
                    <a href='#' className='google-plus'>
                      <i className='bx bxl-skype'></i>
                    </a>
                    <a href='#' className='linkedin'>
                      <i className='bx bxl-linkedin'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-lg-2 col-md-6 footer-links'>
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className='bx bx-chevron-right'></i> <a href='#'>Home</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i> <a href='#'>About us</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i> <a href='#'>Services</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{" "}
                    <a href='#'>Terms of service</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{" "}
                    <a href='#'>Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-2 col-md-6 footer-links'>
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className='bx bx-chevron-right'></i>{" "}
                    <a href='#'>Medical Record</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{" "}
                    <a href='#'>Treatment History</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{" "}
                    <a href='#'>Stats & Treatments</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{" "}
                    <a href='#'>Personal Health Record</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{" "}
                    <a href='#'>Remote Access</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{" "}
                    <a href='#'>Calender</a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-4 col-md-6 footer-newsletter'>
                <h4>Our Newsletter</h4>
                <p>
                Streamline patient care with our secure website for accessing comprehensive medical records and health history.
                </p>
                <form action='' method='post'>
                  <input type='email'  name='email' />
                  <input type='submit' value='Subscribe' />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='copyright'>
            &copy; Copyright{" "}
            <strong>
              <span>MedRec</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className='credits'>
            Designed by <a style={{ color: "#1acc8d" }}  href='https://bootstrapmade.com/'>BootstrapMade</a> & Maintained By <a style={{ color: "#1acc8d" }}   href='https://igniteresearch.in/'>Ignite Research</a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default React.memo(Footer);
