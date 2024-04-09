import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({detail}) => {
  return (
    <div className='work-experience-card'>
        <h6>{detail.title}</h6>

        <div className="work-duration">{detail.date}</div>
        <ul>
            {
                detail.responsibility.map((item) => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ExperienceCard