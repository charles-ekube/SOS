import React from 'react'
import ProjectsCard from '../ProjectsCard';
import Image from '../../assets/images/cups.svg';
import '../../assets/styles/workStyles.css';
import { useNavigate } from 'react-router-dom';

const WorkProjectsList = () => {
    const navigate = useNavigate()
    const goToView = () => {
        navigate('workView')
    }

    return (
        <section className={'workProjectListContainer'}>
            <ProjectsCard url={`url(${Image})`} onClick={goToView} />
            <ProjectsCard url={`url(${Image})`} onClick={goToView} />
            <ProjectsCard url={`url(${Image})`} onClick={goToView} />
            <ProjectsCard url={`url(${Image})`} onClick={goToView} />

        </section>
    )
}

export default WorkProjectsList