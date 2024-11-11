import CheckBoxIcon from '@/icons/CheckBoxIcon';
import { useState } from 'react';

interface IngredientListProps {
  ingredients: string[];
  prices: (number | null)[];
}

export default function IngredientList({ ingredients, prices }: IngredientListProps) {
  const [selectedItems, setSelectedItems] = useState<boolean[]>(Array(ingredients.length).fill(false));
  const [allSelected, setAllSelected] = useState(false);

  const handleToggleItem = (index: number) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = !newSelectedItems[index];
    setSelectedItems(newSelectedItems);

    if (newSelectedItems.every((item) => item)) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  };

  const handleToggleAll = () => {
    const newAllSelected = !allSelected;
    setAllSelected(newAllSelected);
    setSelectedItems(Array(ingredients.length).fill(newAllSelected));
  };

  const total = selectedItems.reduce((sum, selected, index) => {
    return selected && prices[index] ? sum + prices[index]! : sum;
  }, 0);

  return (
    <div className="p-4 bg-white rounded-lg shadow-custom-light w-[350px]" >
      <div className="flex items-center mb-4">
        <CheckBoxIcon checked={allSelected} onChange={handleToggleAll} />
        <span className="ml-2 font-roboto text-title1">Ingredientes</span>
      </div>
      <div className="min-h-[200px]">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <div className="flex items-center w-[70%] overflow-hidden">
              <CheckBoxIcon
                checked={selectedItems[index]}
                onChange={() => handleToggleItem(index)}
              />
              <span className="ml-2 font-roboto text-label1 truncate">{ingredient}</span>
            </div>
            <span className="font-roboto text-title3">
              {selectedItems[index] && prices[index] !== null ? `$${prices[index]}` : '-'}
            </span>
          </div>
        ))}
      </div>
      <hr className="border-t-2 border-primary-500 my-4" />
      <div className="flex justify-between font-bold">
        <span className="font-roboto text-title3">Total:</span>
        <span className="font-roboto text-title3">${total}</span>
      </div>
    </div>
  );
}
