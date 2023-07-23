import React from "react";
import useDragAndDrop, { Item } from "./useDragAndDrop";

type DraggableListProps<T extends Item> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

const DraggableList = <T extends Item>({
  items,
  renderItem,
}: DraggableListProps<T>) => {
  const { data, handleDragStart, handleDragOver, handleDragEnd } =
    useDragAndDrop(items);

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDragEnd={handleDragEnd}
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default DraggableList;
