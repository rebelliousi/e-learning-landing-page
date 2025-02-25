import React from 'react';

const ContentDisplay = ({ selectedItem }) => {
  if (!selectedItem) {
    return <div className="p-4">Select an item to view its content.</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-semibold mb-2">{selectedItem.title}</h2>
      <p className="text-gray-600 mb-4">{selectedItem.description}</p>
      <div>{selectedItem.content}</div> {/* Render the JSX content */}
    </div>
  );
};

export default ContentDisplay;