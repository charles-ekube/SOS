import React from 'react'
import DumpHero from '../components/dump/DumpHero'
import DumpViewArticleContainer from '../components/dump/DumpViewArticleContainer'
import DumpViewHero from '../components/dump/DumpViewHero'
import DumpViewImagesContainer from '../components/dump/DumpViewImagesContainer'


const DumpView = () => {
    return (
        <>
            <section className={'workViewContainer'} style={{ background: "#ffffff", }}>
                <DumpViewHero />
                <DumpViewArticleContainer />
                <DumpViewImagesContainer />
            </section>
        </>
    )
}

export default DumpView