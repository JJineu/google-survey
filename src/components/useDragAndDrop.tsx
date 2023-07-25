import { useState } from "react";

export type Item = {
  id: number | string;
};

const useDragAndDrop = <T extends Item>(initialData: T[]) => {
  const [data, setData] = useState<T[]>(initialData);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    if (draggedIndex !== null && index !== draggedIndex) {
      const newData = [...data];
      const [draggedItem] = newData.splice(draggedIndex, 1);
      newData.splice(index, 0, draggedItem);
      setData(newData);
      setDraggedIndex(index);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return {
    data,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  };
};

export default useDragAndDrop;
