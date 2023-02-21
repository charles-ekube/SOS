import React from 'react'
import ProjectsCard from '../ProjectsCard';
import Image from '../../assets/images/cups.svg';
const ProjectsList = () => {
    return (
        <>
            <section className={'projectListContainer'}>
                <div>
                    <ProjectsCard url={`url(${Image})`} />
                </div>
                <div>
                    <ProjectsCard url={`url(${Image})`} />
                </div>
            </section>

        </>
    )
}

export default ProjectsList