import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const eachProject =projects.map((project)=>{
    return <ProjectItem key={project.id}{...project}/>
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{eachProject}</div>
    </div>
  );
}

export default ProjectList;
