import React from 'react';

const CardList = ({ items, onSelect }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="font-semibold mb-4">Select an Item</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="p-2 rounded-md hover:bg-gray-200 cursor-pointer"
            onClick={() => onSelect(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;