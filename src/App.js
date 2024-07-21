import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid'; // id elde etmek ucun 


function App() {
   const [to, setTo] = useState('');
   const [list, setList] = useState([]);
 
   function changeTo(event) {
     setTo(event.target.value);
   }
   function addTodo() {
     const newTodo = { id: uuidv4(), text: to, complete: false };
     setList([...list, newTodo]);
     setTo('');
   }
   function completeTo(id) {
     const newList = list.map(todo => {
       if (todo.id === id) {
         return { ...todo, complete: !todo.complete };
       }
       return todo;
     });
     setList(newList);
   }
   function deleteTo(id) {
     const newList = list.filter(todo => todo.id !== id);
     setList(newList);
   }


  return (
    <div className="flex justify-center pt-20">
      <div className="flex justify-center items-center w-[500px] h-[600px] px-6 py-10 bg-[#c8d7de]">
        <div className="flex flex-col gap-8 items-center bg-[#f9d3c6] w-full h-full rounded-[40px] py-8">
          <div className="flex flex-col items-center gap-5 w-full">
            <h1 className="text-6xl font-semibold text-[#497285] aesthetic-font">To Do List:</h1>
            <div className="flex items-center w-[80%] h-[45px] border-2 border-[#497285] rounded-[8px] ">
              <input placeholder="Enter Todo" className="w-full h-full bg-transparent text-[#497285] font-medium italic outline-none m-2"
                     value={to}
                     onChange={changeTo}/>
              <button className="flex justify-center items-center bg-[#497285] text-[#fff] h-full w-[80px] rounded-md font-semibold italic"
                     onClick={addTodo}>Add</button>
            </div>
          </div>

          <div className="flex flex-col items-center h-full w-[80%] bg-[#c8d7de] rounded-[8px] border border-[#497285] overflow-auto">
            {list.map(toItem => (
               <div className="flex justify-between items-center p-2 border-b border-[#497285] w-[90%]" key={toItem.id}>
                  <input type="checkbox" className="w-[18px] h-[18px] accent-[#497285] cursor-pointer bg-transparent"
                        checked={toItem.complete}
                        onChange={() => completeTo(toItem.id)}/>
                  <p className={`${toItem.complete ? 'line-through ' : ' '} font-medium italic text-[#497285] text-lg w-[86%]`}>
                     {toItem.text}
                  </p>
                  <FontAwesomeIcon icon={faTrash} className="cursor-pointer text-[#497285]"
                                    onClick={() => deleteTo(toItem.id)}/>
              </div>
             ))}
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
