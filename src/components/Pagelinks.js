import React from 'react'
import Pagelink from './Pagelink'
import { pagelinks } from '../data'

export const Pagelinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pagelinks.map((links) => {
        return <Pagelink key={links.id} {...links} itemClass={itemClass} />
      })}
    </ul>
  )
}
