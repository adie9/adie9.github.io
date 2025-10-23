import projects from "../projects.json/";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects" className="projects grid gap-8">
      <h2 className="text-4xl text-center">Projects</h2>

      <div className="projects-wrapper flex justify-evenly flex-wrap gap-8">
        {/* Mapping over projects in projects.json */}
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
