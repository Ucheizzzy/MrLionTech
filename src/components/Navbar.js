import React from 'react'
import { SocialLinks } from './SocialLinks'
import { sociallinks } from '../data'
import logo from '../images/logo.svg'
import { Pagelinks } from './Pagelinks'

export const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} className='nav-logo' alt='backroads' />
            <button type='button' className='nav-toggle' id='nav-toggle'>
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <Pagelinks parentClass='nav-links' itemClass='nav-link' />

          <ul className='nav-icons'>
            {sociallinks.map((links) => {
              return (
                <SocialLinks key={links.id} {...links} itemClass='nav-icon' />
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
