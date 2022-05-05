import React, { useState } from 'react';
import DataInput from '../DataInput/DataInput';
import TodoItem from '../TodoItem/TodoItem';
import './todolist.scss'

const Todolist = () => {

   const title = `TO DO LIST`
   const [item, setItem] = useState('');
   const [items, setItems] = useState([
      { id: 1, item: 'Start a new app' },
      { id: 2, item: 'Read a book' },
      { id: 3, item: 'Meetting with team' },
   ]);

   const addNewItem = (e) => {
      e.preventDefault()
      const newItem = {
         id: Date.now(),
         item
      }
      if (item.trim() !== '') {
         setItems([...items, newItem])
      }
      setItem('')
   }

   const removeItem = item => { setItems(items.filter(i => i.id !== item.id)) }

   return (
      <div className='todo'>
         <h1 className='todo__title'>{title}</h1>
         <div className="todo__column">
            <DataInput
               value={item}
               onChange={e => setItem(e.target.value)}
               onClick={addNewItem}
            />
            <ul className="todo__list">
               {items.map(item =>
                  <TodoItem
                     remove={removeItem}
                     item={item}
                     key={item.id} />
               )}
            </ul>
         </div>
      </div>
   );
}

export default Todolist;
