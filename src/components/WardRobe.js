import React from "react";

function WardRobe(robes) {
  return (
    <div class="container d-flex justify-content-center">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div class="d-flex">
              <img
                src="fashion1.png"
                class="d-block"
                style={{ height: "10em" }}
                alt="..."
              />
              <img
                src="fashion2.jpg"
                class="d-block"
                style={{ height: "10em" }}
                alt="..."
              />
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div class="d-flex">
              <img
                src="fashion1.png"
                class="d-block"
                style={{ height: "10em" }}
                alt="..."
              />
              <img
                src="fashion2.jpg"
                class="d-block"
                style={{ height: "10em" }}
                alt="..."
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex">
              <img
                src="/fashion1.png"
                class="d-block"
                style={{ height: "10em" }}
                alt="..."
              />
              <img
                src="/fashion2.jpg"
                class="d-block"
                style={{ height: "10em" }}
                alt="..."
              />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default WardRobe;
