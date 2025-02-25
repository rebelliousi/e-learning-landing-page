import React, { useState } from 'react';

interface Item {
  id: number;
  title: string;
  description: string;
  content: React.ReactNode;  // Use React.ReactNode for JSX content
}

const items: Item[] = [
  {
    id: 1,
    title: "Card 1 Title",
    description: "Description for Card 1...",
    content: <p>Content for Card 1</p>,
  },
  {
    id: 2,
    title: "Card 2 Title",
    description: "Description for Card 2...",
    content: <p>Content for Card 2</p>,
  },
  {
    id: 3,
    title: "Card 3 Title",
    description: "Description for Card 3...",
    content: <p>Content for Card 3</p>,
  },
];

interface CardListProps {
  items: Item[];
  onSelect: (id: number) => void;
}

const CardList: React.FC<CardListProps> = ({ items, onSelect }) => {
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

interface ContentDisplayProps {
  selectedItem: Item | undefined;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ selectedItem }) => {
  if (!selectedItem) {
    return <div className="p-4">Select an item to view its content.</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-semibold mb-2">{selectedItem.title}</h2>
      <p className="text-gray-600 mb-4">{selectedItem.description}</p>
      <div>{selectedItem.content}</div>
    </div>
  );
};

const MainLayout: React.FC = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleSelectItem = (id: number) => {
    setSelectedItemId(id);
  };

  const selectedItem = items.find((item) => item.id === selectedItemId);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <CardList items={items} onSelect={handleSelectItem} />
        </div>
        <div className="col-span-2">
          <ContentDisplay selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;