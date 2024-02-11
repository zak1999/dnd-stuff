import { useDraggable } from "@dnd-kit/core";
import { Children, FC, PropsWithChildren } from "react"
import { CSS } from "@dnd-kit/utilities";


type DraggableProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

const Draggable: FC<DraggableProps> = ({ children, className, id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      className={className}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default Draggable