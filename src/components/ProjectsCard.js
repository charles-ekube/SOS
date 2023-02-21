import React from 'react';
import '../assets/styles/homeStyles.css';

const ProjectsCard = (props) => {
    return (
        <section className={'projectCardContainer'} style={{ backgroundImage: props.url, }}>
            <div className={'projectCardOverlay'}>
                <div className={'projectTitleContainer'}>
                    <h5>{props.projectTitle}</h5>
                    <h5>{props.projectTitle}</h5>
                </div>
                <p>{props.projectYear}</p>
            </div>
        </section>
    )
}

export default ProjectsCard