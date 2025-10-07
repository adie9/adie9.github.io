import React from 'react'

const Contact = () => {
    return (
        <section className='contact flex flex-col items-center gap-4'>
            <h2 className='text-4xl text-center'>Get In Touch</h2>
            <p>If you want to reach out, my inbox is always open!</p>
            <a className='px-3 py-3 bg-primary w-[100px] text-center rounded cursor-pointer' href='mailto:aguerra0522@gmail.com'>Say Hello</a>
            <div className='flex gap-4'>
                <a className='px-3 py-3 bg-primary w-[100px] text-center rounded cursor-pointer' href="https://www.linkedin.com/in/adrian-guerra-a210a4196/">LinkedIn</a>
                <a className='px-3 py-3 bg-primary w-[100px] text-center rounded cursor-pointer' href="https://github.com/adie9">GitHub</a>
            </div>
        </section>
    )
}

export default Contact