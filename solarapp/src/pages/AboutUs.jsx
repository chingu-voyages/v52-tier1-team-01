import React from "react";

import '../styling/AboutUs.css'
import Footer from "../components/Footer";
import IconInfoBar from "../components/IconInfoBar";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="header">
        <div className="container">
          <header className="header-bar ">
            <h1 className="header-logo">
              <a href="/"><img src="/assets/solar-app-logo.svg" alt="SAY logo" /></a>
            </h1>
            <nav className="header-nav">
              <h2 className="visually-hidden">navigation</h2>
              <ul>
                <li><button type="button">Schedule</button></li>
                <li><a href="/aboutus">About Us</a></li>
                <li className="admin">
                  <a href="/admin">Admin Login</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <section className="content">
        <div className="container">
          <h3 className="title">About Us</h3>
          <div className="profile-wrap">
            <div className="profile">
              <div className="profile-head">
                <strong className="name">Soumyajit</strong>
                <span className="role">Developer</span>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt dolorum cupiditate architecto voluptas iusto, qui, atque, sint aperiam laudantium expedita reiciendis? Magnam eos ipsum deleniti incidunt esse quas numquam voluptatem!</p>
              <ul className="strength">
                <li>strength 1</li>
                <li>strength 2</li>
                <li>strength 3</li>
              </ul>
            </div>
            <div className="profile">
              <div className="profile-head">
                <strong className="name">Amanda</strong>
                <span className="role">UI/UX designer</span>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, cum ipsum tempore nesciunt voluptate dicta beatae quaerat deleniti reiciendis sapiente minima pariatur vero. Praesentium accusantium inventore asperiores ratione laborum fugit.</p>
              <ul className="strength">
                <li>strength 1</li>
                <li>strength 2</li>
                <li>strength 3</li>
              </ul>
            </div>
            <div className="profile">
              <div className="profile-head">
                <strong className="name">Yujeong</strong>
                <span className="role">Developer</span>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, cum ipsum tempore nesciunt voluptate dicta beatae quaerat deleniti reiciendis sapiente minima pariatur vero. Praesentium accusantium inventore asperiores ratione laborum fugit.</p>
              <ul className="strength">
                <li>HTML,CSS,JS</li>
                <li>responsive design</li>
                <li>persistence</li>
              </ul>
            </div>
          </div>
          <div className="netlify-link">
            <a href="https://saysolarapp.netlify.app/" target="_blank" rel="noopener noreferrer">Move to Netlify.app</a>
          </div>
        </div>
        <div className="img-box">
          <img src="/assets/aboutus-bg.png" alt="" />
        </div>
        <IconInfoBar />
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;