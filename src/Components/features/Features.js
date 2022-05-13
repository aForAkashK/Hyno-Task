import React from "react";
import { featuersData, teamMebers } from "./FeaturesData";
import digitalLocker from "../../assets/images/digital-locker.jpg";
import grafity from "../../assets/images/grafity.svg";

const Features = () => {
  return (
    <>
      <div className='features-wrapper'>
        <div className='features-title'>
          <h1>Our Features</h1>
        </div>
        <div className='features-container'>
          <div className='container'>
            <div className='row d-flex justify-content-evenly '>
              {featuersData.map((item) => {
                return (
                  <div className='col-5 featuers-box-grid mb-3' key={item.id}>
                    <div className='icons-box'>
                      <i className={`${item.icons} featuers-icons`}></i>
                    </div>
                    <div className='feature-conent-box'>
                      <div className='feature-title'>
                        <h3>{item.title}</h3>
                      </div>
                      <div className='feature-text'>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='banner-container row'>
        <div className='banner-image-box col-4'>
          <div className='grid-style-box'></div>
          <img
            className='banner-locker-img ms-auto d-block'
            src={digitalLocker}
            alt='locker security'
          />
        </div>
        <div className='banner-title-box col-8'>
          <h1 className='ms-5'>
            Happy landowners with secure land rights and enhanced land value
          </h1>
        </div>
      </div>

      {/* TEAM MEMBERS CODE */}

      <div className='team-group-container row mt-5'>
        <div className='team-group-title col-12'>Our Team</div>
        <div className='team-group-members col-12'>
          <div className='col-1 carousel-wrapper'>
            <div className='carousel-controls-left carousel-control'>
              <i className='bx bx-chevron-left icons-cars'></i>
            </div>
          </div>
          <div className='col-10'>
            <div className='row d-flex justify-content-between'>
              {teamMebers.map((member) => {
                return (
                  <div className='col-3 card-wrapper' key={member.id}>
                    <div className='member-img'>
                      <img
                        className='members-image'
                        src={member.img}
                        alt={member.name}
                      />
                    </div>
                    <div className='member-name'>{member.name}</div>
                    <div className='member-position'>{member.content}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='col-1 carousel-wrapper'>
            <div className='carousel-controls-left carousel-control'>
              <i className='bx bx-chevron-right icons-cars'></i>
            </div>
          </div>
        </div>
      </div>



      {/* OUR VALUES CODE */}

      <div className="OurTeams-Wrapper">
        <div className="OurTeams-left-Content">
          <div className="OurTeams-title">
            <h1>Our Values</h1>
          </div>
          <div className="OurTeams-content">
            <ul>
              <li className="mt-4"><p>We provide efficient services maintaining confidentiality</p></li>
              <li className="mt-4"><p>We give highest priority to the needs and requirements of the users</p></li>
              <li className="mt-4"><p>Minimizing time, reducing cost and improving quality are our key concerns</p></li>
            </ul>
          </div>
        </div>

        <div className="OurTeams-right-Content">
          <img
            className='grafity-OurTeams-img ms-auto d-block'
            src={grafity}
            alt='Image is crashed'
          />
        </div>
      </div>


      {/* LandDocs CODE */}


      <div className="LandDocs-Wrapper">
        <div className="LandDocs-right-Content">
          <img
            className='grafity-LandDocs-img ms-auto d-block'
            src={grafity}
            alt='Image is crashed'
          />
        </div>

        <div className="LandDocs-left-Content">
          <div className="LandDocs-title">
            <h1>Why only LandDocs?</h1>
          </div>
          <div className="LandDocs-content">
            <ul>
              <li className="mt-4"><p>Invest in land and leave the rest to LandDocs for trusted management  </p></li>
              <li className="mt-4"><p>Highly qualified experts in all land related fields with decades of experience</p></li>
              <li className="mt-4"><p>Creating cadre of competent land service providers</p></li>
            </ul>
          </div>
        </div>
      </div>


      {/* OUR VALUES CODE */}

      <div className="OurTeams-Wrapper">
        <div className="OurTeams-left-Content">
          <div className="OurTeams-title">
            <h1>About LandDocs</h1>
          </div>
          <div className="OurTeams-content">
            <ul>
              <li className="mt-4"><p>All land related service available at your doorsteps on a single click or call  </p></li>
              <li className="mt-4"><p>Monitoring your land rights, records and boundaries from anywhere in the world</p></li>
              <li className="mt-4"><p>All land services needs pertaining to land in India - from anywhere in the world</p></li>
            </ul>
          </div>
        </div>

        <div className="OurTeams-right-Content">
          <img
            className='grafity-OurTeams-img ms-auto d-block'
            src={grafity}
            alt='Image is crashed'
          />
        </div>
      </div>


      {/* Get in touch CODE */}


      <div className="contact-wrapper">
        <div className="contact-heading">
          <h2 className="contact-head">Get in touch</h2>
          <p className="contact-subpara">Contact us for a quote, help us o join the team.</p>
        </div>

        <div className="contact-icons">
          <div className="icon-box px-5">
            <i class='bx bxs-map bx-lg mx-5' ></i>
            <p>1-24 Vihan Nagar, Alwal</p>
          </div>
          <div className="icon-box px-5">
            <i class='bx bxs-map   bx-lg mx-5' ></i>
            <p>+91 45689 89012</p>
          </div>
          <div className="icon-box px-5">
            <i class='bx bxs-map  bx-lg mx-5' ></i>
            <p>info@landocs.com</p>
          </div>
        </div>
      </div>


      <div className="Footer">
        <div className="footer-left-Logo">
          <div className='logo-main'>
            <div href='#' className='brand-logo'>
              Land <span>Docs</span>
            </div>
            <div className='logo_sub-text' style={{ width: '130px', color: '#ffff' }}>Plot no. 1-24 Vihan Nagar, Alwal Hyderabad - Telangana Sate 500010</div>
          </div>
        </div>
        <div className="footer-content mt-5">
          <p>Home</p>
          <p>Knowledge Centre</p>
          <p>Our Mission</p>
          <p>FAQs</p>
        </div>
        <div className="footer-content">
          <p>Gallery</p>
          <p>Value Satement</p>
          <p>Ask a Legal Expert</p>
        </div>
        <div className="footer-content">
          <p>Documents</p>
          <p>FAQs</p>
          <p>Registration</p>
        </div>
      </div>


      <div className="contact-box">
        <div className="fields">
          <input className="input-fields mt-4 mx-3" type="text" placeholder="First Name"></input>
          <input className="input-fields mt-4 mx-3" type="text" placeholder="Last Name"></input>
          <br></br>
          <input className="input-fields mt-4 mx-3" type="text" placeholder="Email Address"></input>
          <input className="input-fields mt-4 mx-3" type="text" placeholder="Mobile no."></input>
          <br></br>
          <textarea className="text-input mt-4"cols='80' rows="5"></textarea>
        </div>
        <div>
          <button className="Sub-btn ">Submit</button>
        </div>

      </div>





    </>
  );
};

export default Features;
