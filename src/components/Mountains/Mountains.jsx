import React, { useEffect, useState } from 'react'
import './Mountains.css'
import PopUp from '../PopUp';

export default function Mountains({mountain}) {

  const [isOpen, setIsOpen] = useState(false);

  function updateState(value) {
    setIsOpen(value);
  }

  return (
          <article className='mountain-card'>
              <header className='img-cont'>
                <img src={mountain.mountain}></img>
              </header>
              <footer className='footer'>
                <h3>{mountain.name}</h3>
                <h5>{mountain.place}</h5>
              </footer>
              <button className='details-button' onClick={() => {setIsOpen(true)}}>DETAILS</button>
                { isOpen === true && (
                  <PopUp  mountain={mountain} isOpen={isOpen} updateState={updateState}/>
                )
                }
          </article>
  )
}
