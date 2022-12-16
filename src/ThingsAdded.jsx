import React from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';


const ThingsAdded = ({ thingsAdded, list, setList, handleTaskRemove, handleToggle, id }) => {


  console.log("id is", thingsAdded.id)
  return <div className="flex">
    <div className={"m-1 text-lg text-indigo-500 " + (thingsAdded.complete ? "line-through" : "")} >{thingsAdded.task}</div>

    <input type="checkbox" className="mx-2" onClick={() => handleToggle(id)}></input>
    <button className="px-2"><MdOutlineDeleteForever className="text-red-400" onClick={handleTaskRemove} /> </button>
  </div>
}
export default ThingsAdded;