import React, { useEffect, useRef } from 'react'

export default function PopUp({mountain, isOpen, updateState}) {

 useEffect(() => {
    
    const clickOutSide = () => {
        updateState(false);
    }

    if (isOpen) {
        document.addEventListener("mousedown", clickOutSide);
      } else {
        document.removeEventListener("mousedown", clickOutSide);
      }
  
      return () => {
        document.removeEventListener("mousedown", clickOutSide);
      };

 }, [isOpen]);

  return (
    <div className='pop-up'>
        <div>
            <img src={mountain.mountain}></img>
        </div>
        <div>
            <h4> Altitude: {mountain.altitude} m</h4>
            <h4> Formación Geologica: {mountain.formacion}</h4>
            <h4> Fauna: </h4>
            <ul>
                {
                    mountain.fauna.map((fauna, index) => (
                        <li key={index}>{fauna}</li>
                    ))
                }
            </ul>
            <h4>VEGETACION:</h4>
            <ul>
                {
                    mountain.vegetation.map((vegetation, index) => (
                        <li key={index}>{vegetation}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
