import React from "react";

import '../styling/IconInfoBar.css';

const IconInfoBar = () => {
  return (
    <div id="icon-info-bar">
      <div class="icon-info-card" id="card001">
        <div class="icon-card-image">
          <img src="/assets/card-01.png" id="card001Img" alt="card001" />
        </div>
        <div class="icon-card-text">
          <span>Citywide Coverage</span>
          <p>Serving all Los Angeles neighborhoods.</p>
        </div>
      </div>

      <div class="icon-info-card" id="card002">
        <div class="icon-card-image">
          <img src="/assets/card-02.png" id="card002Img" alt="card002" />
        </div>
        <div class="icon-card-text">
          <span>Free Solar Assessment</span>
          <p>No cost expert evaluation.</p>
        </div>
      </div>

      <div class="icon-info-card" id="card003">
        <div class="icon-card-image">
          <img src="/assets/card-03.png" id="card003Img" alt="card003" />
        </div>
        <div class="icon-card-text">
          <span>Energy Bill Reduction</span>
          <p>Lower your monthly expenses.</p>
        </div>
      </div>

      <div class="icon-info-card" id="card004">
        <div class="icon-card-image">
          <img src="/assets/card-04.png" id="card004Img" alt="card004" />
        </div>
        <div class="icon-card-text">
          <span> Eco-Friendly Solutions</span>
          <p>Transition to clean, sustainable solar power.</p>
        </div>
      </div>
    </div>
  );
};

export default IconInfoBar;
