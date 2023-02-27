import React from 'react'
import { aboutData } from '../data'
import aboutImg from '../images/about.jpeg'
import { AboutData } from './AboutData'
import { Title } from './Title'

export const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>

          {aboutData.map((data) => {
            return <AboutData {...data} key={data.id} />
          })}

          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  )
}
