import React, { useState } from 'react';
import AddToList from './AddToList';
import data from './data.json';
import ThingsAdded from './ThingsAdded';

const UI = () => {
  const [todo, setTodo] = useState(false);

  const handleClick = () => {
    setTodo(true);
  };
  const handleRemove = () => {
    setTodo(false);
  };

  const getData = JSON.parse(localStorage.getItem('Todo')) || []

  const [list, setList] = useState(getData);

  const addTask = userInput => {
    let copy = [...list];
    copy = [
      ...copy,
      { id: list.length + 1, task: userInput, complete: false }
    ];
    setList(copy);
    console.log('id is mm', list.id);
  };

  const saveData = () => { localStorage.setItem('Todo', JSON.stringify(list)); }

  console.log('checkbox')
  return (
    <div className="m-2 border-cyan-700 border-4 rounded-md border-solid bg-blue-100 h-screen sm:w-3/6 w-screen">
      <h1 className="text-xl font-extrabold text-indigo-800 p-3">
        Things to get done
			</h1>

      <div>

        <div className="flex items-center">
          <h2 className="font-bold px-4 text-cyan-500">Things to do</h2>
          <button className="py-1 px-3 text-slate-100 bg-cyan-600 rounded-md font-semibold" onClick={saveData}>Save Progress</button>
        </div>

        <div className="py-3 px-2">
          {list.map(thingsAdded => {

            const handleTaskRemove = () => {
              setList(list => list.filter((entry) => entry !== thingsAdded));
            };

            const handleToggle = (id) => {
              let mapped = list.map(entry => {
                return entry.id == id ? { ...entry, complete: !entry.complete } : { ...entry };
              });
              setList(mapped);
              console.log("hjhjhj")
            }



            return (
              <ThingsAdded
                thingsAdded={thingsAdded}
                list={list}
                setList={setList}
                handleTaskRemove={handleTaskRemove}
                handleToggle={handleToggle}
                id={thingsAdded.id}
              />
            );
          })}
        </div>
        <div className="px-3">

          {todo == false && (
            <button
              className="py-2 px-3 text-slate-100 bg-cyan-600 rounded-full font-semibold"
              onClick={handleClick}
            >
              + Add a todo
						</button>
          )}

          {todo == true && (
            <AddToList
              handleRemove={handleRemove}
              list={list}

              addTask={addTask}
              setTodo={setTodo}
            />
          )}
        </div>
      </div>


    </div>
  );
};

export default UI;
