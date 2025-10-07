import projects from '../projects.json/'
import Project from './Project'

const Projects = () => {
    return (
        <section id='projects' className='projects flex flex-col gap-4'>
            <h2 className='text-4xl text-center'>Projects</h2>
            {/* Mapping over projects in projects.json */}
            { projects.map((project, index) => (
                <Project key={index} 
                title={project.title}
                description={project.description}
                image={project.image}
                demo={project.demo} />
            ))}
            
        </section>
    )
}

export default Projects