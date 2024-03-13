import React, { useEffect, useState } from 'react'
import './Searcher.css'

export default function Searcher({getFormValue}) {

  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    if(formValue.trim() === ''){
      getFormValue('');
    }else{
      getFormValue(formValue);
    }
  }, [formValue]);


  const onInputChange = (event) => {
    setFormValue(event.target.value);
  }

  const formSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='content-searcher'>
        <form className='form' onSubmit={formSubmit}>
            <input value={formValue} onChange={onInputChange}></input>
            <button type="submit" onClick={onInputChange}>SEARCH</button>
        </form>
    </div>
    
  )
}
