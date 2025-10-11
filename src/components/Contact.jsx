

const Contact = () => {
    return (
        <section className='contact flex flex-col items-center gap-4'>
            <h2 className='text-4xl text-center'>Get In Touch</h2>
            <p>If you want to reach out, my inbox is always open!</p>
            <a className='px-3 py-3 bg-primary w-[100px] text-center rounded cursor-pointer hover:bg-secondary hover:text-dark' href='mailto:aguerra0522@gmail.com'>Email</a>
            <div className='flex gap-4'>
                <a href="https://www.linkedin.com/in/adrian-guerra-a210a4196/"><img className="bg-primary w-[50px] rounded-full" src="https://s.magecdn.com/social/mw-linkedin.svg" alt="Linkedin"></img></a>
                <a href="https://github.com/adie9"><img className="bg-primary w-[50px] rounded-full" src="https://s.magecdn.com/social/mw-github.svg" alt="GitHub"></img></a>
                
            </div>
        </section>
    )
}

export default Contact