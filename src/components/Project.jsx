

const Project = ({ title, description, image, demo}) => {
    return (
        <section className='project'>
            <a href={demo}>
                <div className='project-card bg-secondary text-dark w-[300px] rounded hover:-translate-y-2 transition'>
                    <img className='rounded-t' src={image} alt='project preview'></img>
                    <div className='px-2 py-4'>
                        <h3 className='italic font-bold'>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </section>
    )
}

export default Project