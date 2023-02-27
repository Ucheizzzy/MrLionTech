import React from 'react'

const Pagelink = ({ itemClass, href, text }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  )
}
export default Pagelink
