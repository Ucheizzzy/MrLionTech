import React from 'react'

export const SocialLinks = ({ itemClass, href, icon }) => {
  return (
    <li>
      <a href={href} target='_blank' rel='nonreferrer' className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  )
}
