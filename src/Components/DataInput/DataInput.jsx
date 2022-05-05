import React from 'react';
import './datainput.scss'

const Datainput = ({ value, onChange, onClick }) => {
   return (
      <form className='form'>
         <input value={value} onChange={onChange} type="text" placeholder='Add New Task...' className='form__input input' />
         <button onClick={onClick} className='form__button button'>+</button>
      </form>
   );
}

export default Datainput;
