import { FC, PropsWithChildren } from "react";
import { useDroppable } from "@dnd-kit/core";
import clsx from "clsx";


type DroppableType = {
  children: React.ReactNode;
  className?: string;
  id: string;
};


const Droppable: FC<DroppableType> = ({ children, className, id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      className={clsx(className, isOver ? "bg-green-50" : "")}
      ref={setNodeRef}
    >
      {children}
    </div>
  );
};

export default Droppable;
