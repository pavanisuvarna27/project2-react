import React from "react";
function Footer(){
    return(
      <footer>
          <div className="container-fluid text-center" style={{backgroundColor:"Black"}}>
            <div class="py-5">
              <h2 class="text-light">Interested in working with me ? </h2>
              <button class="btn btn-outline-light btn-lg">let's talk</button>

            </div>
            <div class="row">
              <div class="col-12 col-md-4">
                  <h5 class="text-info">More Links</h5>
                  <a href="#" class="text-light d-block">Blogs</a>
                  <a href="#" class="text-light d-block">home</a>
                  <a href="#" class="text-light d-block">contact me</a>
                  <a href="#" class="text-light">
                      write a recommendation <i class="fas fa-heart text-light"></i>
                  </a>

                </div>
                <div class="col-12 col-md-4 text-light text-justify py-3 ">
                  <p>
                      The Moon is a barren, rocky world without air and water.
                      It has dark lava plain on its surface. The Moon is filled wit craters.
                      It has no light of its own. It gets its light from the Sun.
                      The Moo keeps changing its shape as it moves round the Earth.
                      It spins on its axis in 27.3 days stars were named after the Edwin Aldrin
                      were the first ones to set their foot on the Moon on 21 July 1969 They reached
                      the Moon in their space craft named Apollo II.
                  </p>
                </div>
                <div class="col-12 col-md-4 py-3">
                  <h5 class="text-info">Social</h5>
                  <a href="#">
                      <i class="fab fa-linkedin text-light h2 d-block"></i>
                  </a>
                  <a href="#">
                      <i class="fab fa-github text-light h1 d-block"></i>
                  </a>
                  <a href="#">
                      <i class="fas fa-envelope text-light h1 d-block"></i>
                  </a>
              </div>
              </div>
              <div class="text-muted py-3">
              <p>Copyrigh © Pavani 2020</p>
            </div>
              
          </div>
      </footer>  
    );
}
export default Footer;