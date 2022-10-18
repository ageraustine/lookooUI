import React from "react";

function Reccomendations() {
  return (
    <div>
      <div class="d-flex justify-content-center h5" style={{fontFamily:'sans-serif'}}>Recomendations</div>
      <div class="row row-cols-1 row-cols-sm-5 mt-2">
        <div class="card bg-gradient col mt-1 ms-1 btn">
          <img
            src="/lady.jpg"
            class="card-img-top"
            style={{ height: "8em", width: "10em" }}
          />
          <div class="card-body">
            <p class="p">pajama ksh.500</p>
          </div>
        </div>
        <div class="card ms-1 me-1 bg-gradient col mt-1 btn">
          <img
            src="/men_suit.jpg"
            class="card-img-left align-middle"
            style={{ height: "8em", width: "10em" }}
          ></img>
          <div class="card-body">
            <p class="card-text p">polo shirt ksh.250</p>
          </div>
        </div>
        <div class="card ms-1 me-1 bg-gradient col mt-1 btn">
          <img
            src="/lady.jpg"
            class="card-img-left align-middle"
            style={{ height: "8em", width: "10em" }}
          ></img>
          <div class="card-body">
            <p class="card-text p">sweat pants ksh.400</p>
            <div class="bi bi-heart"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reccomendations;
