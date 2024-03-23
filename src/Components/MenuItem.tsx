import type { MenuItem as MenuItemType } from "../types";

type MenuItemProps = {
  item: MenuItemType;
  // El signo de pregunta es para hacerle saber a
  // Typescript que pueden o no pasarlo.
  // Ejemplo: addItem?: (item: MenuItemType) => void;
  addItem: (item: MenuItemType) => void;
};

export const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
    className="flex justify-between w-full p-3 border-2 border-teal-400 hover:bg-teal-50"
    onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};
