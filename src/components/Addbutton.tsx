import React from "react";

function AddItemButton() {
  const addItem = () => {
    alert("Item added!");
  };

  return (
    <button onClick={addItem} className="bg-teal-500 text-white rounded-md px-4 py-2 hover:bg-teal-600">
      Add Item
    </button>  
  );
}

export default AddItemButton;
