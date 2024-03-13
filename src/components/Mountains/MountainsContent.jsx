import React from 'react'
import Mountains from './Mountains.jsx'

export default function MountainsContent({mountains}) {
  return (
    <div className='mountains-content'>
        {
            mountains.map((mountain, index) => (
                    <Mountains key={index} mountain={mountain}/>       
            ))
        }
    </div>
  )
}
