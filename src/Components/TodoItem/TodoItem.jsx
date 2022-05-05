import React from 'react';
import './todoitem.scss'

const Todoitem = ({ item, remove, editing }) => {
   return (
      <li className="todo__item item-todo">
         <div className="item-todo__checkbox checkbox">
            <input id={item.id.toString()} data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
            <label htmlFor={item.id.toString()} className="checkbox__label _icon-check"><span className="checkbox__text">{item.item}</span></label>
         </div>
         <div className="item-todo__controls">
            <button onClick={() => remove(item)} className='item-todo__delete _icon-trash'></button>
         </div>
      </li>
   );
}

export default Todoitem;
