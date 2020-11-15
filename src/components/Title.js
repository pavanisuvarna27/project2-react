import React from "react";
import pavani2 from "../assets/pavani2.jpg";
function Title(props){
    // const name = "pavani";
    const {name} = props;
    return(
        <div className="container card shadow">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={pavani2}
            alt="userimage"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize : "45px"}}>
    Hi..,I am <span className="text-info">{name}</span>
          </div>
          <h5 class="font-weight-light">Iam working as a Technical Skill Trainer in APSSDC</h5>
        </div>
      </div>
    </div>
    );
}
export default Title;