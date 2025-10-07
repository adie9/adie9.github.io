import React from 'react'

const Hero = () => {
    return (
        <section className="hero flex flex-col justify-center items-center gap-4 md:flex-row">
            <div className='flex flex-col items-center gap-4 md:w-1/2'>
                <h1 className='text-6xl text-center'>Hi, I'm Adrian Guerra</h1>
                <p className='text-3xl text-center'>A passionate learner turning designs into responsive, accessible web interfaces.
                    I build with React, TailwindCSS, and a love for clean, user-friendly experiences.</p>
                <a className='rounded px-3 py-3 bg-primary w-[100px] text-center cursor-pointer' href='#projects'>Projects</a>
            </div>
            <div className='md:w-1/2'>
                <img src='/images/responsive_design.svg' alt='monitor+phone'></img>
            </div>
        </section>
    )
}

export default Hero