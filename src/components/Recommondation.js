import React,{useState} from "react";
import {v4 as uuid} from "uuid";
import RecommandationCard from "./RecommandationCard";

function Recommondation() {
    const [recommendationState,setRecommendationState]=useState(null)
    const recommondations = [
        {
            id:1,
            name : "Person1",
            company : "APSSDC",
            designation : "Python Trainer",
            message :"She is a Technical Skill Trainer",
        },
        {
            id:2,
            name : "Person2",
            company : "APSSDC",
            designation : "Frontend Developer",
            message :"She is a Frontend Developer",
        },
        {
            id:1,
            name : "Person3",
            company : "APSSDC",
            designation : "Django Developer",
            message :"She is a Django Developer",
        },
        {
            id:1,
            name : "Person4",
            company : "Apssdc",
            designation : "Fullstack Developer",
            message :"She is a Fullstack Developer",
        },

    ]
    return (
        <div className="container-fluid my-5">
            
        <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
      {
          recommondations.map((recommendation)=>
          (
              <RecommandationCard key={uuid()} recommendation={recommendation} onRecommendationClick={(recommendation)=>(setRecommendationState(recommendation))} />

          )
          )
      }
      </div>
      {
          recommendationState ?
          <div className="modal" id="myModal">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header border border-white">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body text-center border border-white">
                          <h5> {recommendationState.message} </h5>
                          <p>  {recommendationState.name} </p>
                          <p> {recommendationState.designation} at {recommendationState.company}</p>
                        </div>
                        <div className="modal-footer border border-white"></div>
                  </div>
              </div>
          </div>: ''
      }

    </div>
    );
}

export default Recommondation;