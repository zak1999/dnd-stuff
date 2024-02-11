import './App.css';
import { DndContext } from "@dnd-kit/core";
import Draggable from './components/Draggable';
import Droppable from './components/Droppable';
import { useState } from 'react';
import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import clsx from 'clsx';

function App() {
  const [parent, setParent] = useState<null | UniqueIdentifier>(null);
  const containers = ['A', 'B', 'C'];
  
  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    console.log("setting to ", over?.id);
    setParent(over ? over.id : null);
  };

  const draggableMarkup = <Draggable className='bg-red-50 w-fit' id="draggable">Drag me</Draggable>;

  return (
    <div className="bg-white flex flex-col">
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}
        <div className="flex">
          {containers.map((id) => (
            <Droppable key={id} id={id} className={clsx("w-52 h-52 border-2")}>
              <p className={clsx(id === parent ? "underline" : "")}>{id}</p>
              <br />
              {parent === id ? draggableMarkup : "Drop here!"}
            </Droppable>
          ))}
        </div>
      </DndContext>
    </div>
  );

}


export default App;
