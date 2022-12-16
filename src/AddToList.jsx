import React, { useState, useEffect } from 'react';



const AddToList = ({ handleRemove, list, addTask, setTodo }) => {

  const [userInput, SetUserInput] = useState("")
  const handleSubmit = () => {
    event.preventDefault();
    addTask(userInput);
    SetUserInput("")
    setTodo(false)
  }
  const handleChange = (e) => { SetUserInput(e.target.value) }




  return (
    <div className="px-5">
      <div className="flex flex-col">
        <h1>Create a todo</h1>
        <div className="bg-green-300"></div>
        <form onSubmit={handleSubmit}>
          <input
            id="Add"
            name="Add"
            type="text"
            className="border border-slate-400 rounded-md bg-slate-200 w-96 sm:w-80 p-1"
            value={userInput}
            onChange={handleChange}
          />
          <div>
            <button type="submit" className="py-1 px-4 text-slate-100 bg-cyan-600 rounded-lg font-semibold">
              Save
					</button>

            <button className="py-2 px-4 text-cyan-600 bg-slate-200 rounded-lg font-semibold ml-2" onClick={handleRemove
            }>
              Cancel
					</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AddToList;
