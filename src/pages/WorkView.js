import React from 'react'
import WorkViewArticleContainer from '../components/work/WorkViewArticleContainer'
import WorkViewHero from '../components/work/WorkViewHero'
import WorkViewImagesContainer from '../components/work/WorkViewImagesContainer'


const WorkView = () => {
    return (
        <>
            <section className={'workViewContainer'}>
                <WorkViewHero />
                <WorkViewArticleContainer />
                <WorkViewImagesContainer />
            </section>
        </>
    )
}

export default WorkView