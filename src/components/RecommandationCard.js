import React from 'react'

function RecommandationCard(props) {
    // const {name,designation,company,message}=props.recommondation;

    // console.log(props);
    return (
        <div className="col-12 col-md-4 col-lg-4">
        <a href= "/" type="submit" className="d-block text-decoration-none text-dark" data-toggle="modal" data-target="#myModal" onClick={()=>props.onRecommendationClick(props.recommendation)}>
        <div className="card shadow h-100">
        <div className="card-body">
            <h5 className="card-text text-seconday">{props.recommendation.message.slice(0,20)+"..."}</h5>
            <p className="card-text text-seconday mb-0">{props.recommendation.name}</p>
            <p className="card-text text-seconday">{props.recommendation.designation} at {props.recommendation.company}</p>
        </div>
      </div>
      </a>
      
      </div>
    );
}

export default RecommandationCard;

