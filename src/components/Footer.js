import React from 'react'
import { sociallinks } from '../data'
import { Pagelinks } from './Pagelinks'
import { SocialLinks } from './SocialLinks'

export const Footer = () => {
  return (
    <footer className='section footer'>
      <Pagelinks parentClass='footer-links' itemClass='footer-link' />

      <ul className='footer-icons'>
        {sociallinks.map((links) => {
          return (
            <SocialLinks {...links} key={links.id} itemClass='footer-icon' />
          )
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; MrLionTech Company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
