import React from "react";
import ProjectCard from "./ProjectCard";
function Project(){
    const projects =[
        {
            id: 1,
            title: "Project 1",
            imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
            excerpt: "Python project",
        },
        {
            id :2,
            title: "Project 2",
            imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
            excerpt: "Django Project",
        },
        {
            id: 3,
            title: "Project 3",
            imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
            excerpt: "Frontend Project",
        },
    ];
    return(
        <div className="container text-center my-5">
      <h1 className="font-weight-light">
        My <span className="text-info">Projects</span>
      </h1>
      <div className="lead">I build products. Just like this website</div>
      <div className="row my-5 pt-3">
          {
              projects.map((project) => (
                <div key = {project.id} className = "col-12 col-md-4 my-2">
                    <ProjectCard project = {project}
                    />
                </div>
            )
              )}
          
        
      </div>
      <div className="my-5">
        <a href="/" className="text-dark text-right">
          <h5>
            My Projects
            <i className="fas fa-arrow-right align-middle"></i>
          </h5>
        </a>
      </div>
    </div>
    );
}
export default Project