import React from "react";

function WardRobe() {
  return (
    <div class="d-flex justify-content-center">
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
      >
        <div class="carousel-inner" style={{ height: "15em", width:'100%'}}>
          <div class="carousel-item active">
            <img src="red_suit.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="red_suit.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="red_suit.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
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
