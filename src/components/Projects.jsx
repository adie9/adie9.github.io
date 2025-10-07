import React from 'react'

const Projects = () => {
    return (
        <section id='projects' className='projects flex flex-col gap-4'>
            <h2 className='text-4xl text-center'>Projects</h2>
            <a href='https://browser-extensions-manager-ui-main-gules.vercel.app/'>
                <div className='project-card bg-secondary text-dark w-[300px] rounded hover:-translate-y-2 transition'>
                    <img className='rounded-t' src='/images/browser_extensions_manager_ui_preview.jpg' alt='project preview'></img>
                    <div className='p-2'>
                        <h3 className='italic font-bold'>Browser Extensions Manager UI</h3>
                        <p>A responsive interface for managing browser extensions, built with React and Sass.</p>
                    </div>
                </div>
            </a>
        </section>
    )
}

export default Projects