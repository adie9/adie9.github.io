import React from 'react'

const AboutMe = () => {
    return (
        <section className='about-me flex flex-col gap-4 max-w-4xl'>
            <h2 className='text-4xl text-center'>About Me</h2>
            <p className='leading-relaxed'>I'm an aspiring frontend developer based in Miami, FL, currently building my skills through hands-on projects
                and challenges from Frontend Mentor. I enjoy building responsive, and accessible interfaces using React and TailwindCSS,
                and I'm eager to learn and implement new technologies to improve my work.
            </p>
            <p className='leading-relaxed'>My goal is to reach a place where I can contribute to real-world projects, grow as a developer, and help create user experiences
                that are beautiful and functional.
            </p>
        </section>
    )
}

export default AboutMe