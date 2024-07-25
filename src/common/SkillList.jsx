import React from 'react'

function SkillList({src,skill}) {
  return (
    <span>
    <img className='img' src={src} alt="CheckMark Icon" />
    <p>{skill}</p>
  </span>
  )
}

export default SkillList