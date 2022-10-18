import React from 'react'

function FeaturesCard() {
    return (
        <div class="row row-cols-1 row-cols-sm-5 mt-2">
            <div class="card bg-gradient col mt-1 ms-1" >
                <img src='/lady.jpg' class="card-img-top" style={{ height: "8em", width: "10em" }} />
                <div class="card-body">
                    <h5 class="card-title text-danger">Occassion Matching</h5>
                    
                    <a href="#" class="btn btn-success">Event Match</a>
                </div>
            </div>
            <div class="card ms-1 me-1 bg-gradient col mt-1" >
                <img src='/men_suit.jpg' class="card-img-left align-middle" style={{ height: "8em", width: "10em" }}></img>
                <div class="card-body">
                    <h5 class="card-title text-danger">Color Matching</h5>
                     
                    <a href="#" class="btn btn-success">Match Clothe</a>
                </div>
            </div>
            <div class="card ms-1 me-1 bg-gradient col mt-1" >
                <img src='/lady.jpg' class="card-img-left align-middle" style={{ height: "8em", width: "10em" }}></img>
                <div class="card-body">
                    <h5 class="card-title text-danger">Upgrade your Wardrobe</h5>
                     
                    <a href="#" class="btn btn-success">Purchase</a>
                </div>
            </div>
             
        </div>
    )
}

export default FeaturesCard