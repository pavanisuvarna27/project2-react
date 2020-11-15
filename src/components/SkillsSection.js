import React from "react";
import Skill from "./Skill";
import {v4 as uuid} from "uuid";

function SkillsSection(){
    const skills = [
        {
            id : 1,
            name : "Python",
            imageUrl : "https://storage.googleapis.com/unschool-portfolio-website/python.png",
            startsTotal :"3",
            starsActive :"3",
        },
        {
            id : 2,
            name : "HTML",
            imageUrl : "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
            startsTotal :"3",
            starsActive :"3",
        },
        {
            id : 3,
            name : "CSS",
            imageUrl : "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
            startsTotal :"3",
            starsActive :"3",
        },
        {
            id : 4,
            name : "BootStrap",
            imageUrl : "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
            startsTotal :"3",
            starsActive :"3",
        },
        {
            id : 5,
            name : "MYSQL",
            imageUrl : "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
            startsTotal :"3",
            starsActive :"3",
        },
        {
            id : 6,
            name : "Flask",
            imageUrl : "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
            startsTotal :"3",
            starsActive :"3",
        },
        {
            id : 7,
            name : "JavaScript",
            imageUrl : "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
            startsTotal :"3",
            starsActive :"2",
        },
        {
            id : 8,
            name : "React",
            imageUrl : "https://storage.googleapis.com/unschool-portfolio-website/react.png",
            startsTotal :"3",
            starsActive :"2",
        },

    ];

    const finalSkillRow = [];
    for (let i = 0;i < skills.length / 4; i++){
        let skillRow = skills.slice(i*4,(i+1)*4);
        finalSkillRow.push(
            <div key = {uuid()} className="d-flex justify-content-around py-3">
                {
                    skillRow.map((skill) => (
                        <Skill key = {uuid()} skill = {skill} />
                    ))
                }
            </div>

        );

    }
    return(
        <div className="bg-light w-100">
            <div className="container text-center py-5">
                <h1 className="font-weight-light">
                    <span className="text-info">Technology Stack</span>
                </h1>
            <div className="lead pb-5">
                I design, develop and deliver with these Technologies
            </div>
            {finalSkillRow}
            </div>
        </div>

    );
}
export default SkillsSection