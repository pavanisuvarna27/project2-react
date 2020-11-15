import React from 'react'
import {v4 as uuid} from "uuid";

function Skill(props) {
    const {name,imageUrl,startsTotal,starsActive} = props.skill;

    const starList = [];
    for (let i = 0; i < startsTotal;i++){
        if (i < starsActive){
            starList.push(<span key = {uuid()} className="text-primary">★</span>);
        }else{
            starList.push(<span key = {uuid()}>★</span>)
        }
    }
    return (
        <div>
            <img
              className="rounded-circle"
              src={imageUrl}
              alt={name}
              style={{width: "100px", height: "100px"}}
            />
            <div>
              {starList}
            </div>
          </div>
    )
}
export default Skill;
