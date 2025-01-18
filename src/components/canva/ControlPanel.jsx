import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ControlPanel = ({ selectedType, selectedItem, onUpdate, onDelete }) => {
  if (!selectedItem) return null;

  if (selectedType === "heading") {
    return (
      <div className="flex items-center gap-4 rounded-md bg-white p-2 shadow-lg">
        <button className="border px-2 text-xs" onClick={onDelete}>
          Delete
        </button>
        <button
          className="border px-2 text-xs"
          onClick={() => onUpdate({ bold: !selectedItem.bold })}
        >
          {selectedItem.bold ? "Unbold" : "Bold"}
        </button>
        <input
          type="number"
          className="w-20 border px-2 py-1 text-xs"
          value={selectedItem.fontSize || 16} // Default to 16 if undefined
          onChange={(e) =>
            onUpdate({ fontSize: parseInt(e.target.value, 10) || 16 })
          }
        />
        <span className="flex items-center gap-2">
          <button
            className="flex items-center border px-2 text-xs"
            onClick={
              () => onUpdate({ zIndex: (selectedItem.zIndex || 0) + 1 }) // Default to 0
            }
          >
            <FaArrowUp />
          </button>
          <button
            className="flex items-center border px-2 text-xs"
            onClick={
              () =>
                onUpdate({
                  zIndex: Math.max((selectedItem.zIndex || 0) - 1, 0),
                }) // Default to 0, prevent negative values
            }
          >
            <FaArrowDown />
          </button>
          <span className="text-xs">Z-Index: {selectedItem.zIndex || 0}</span>
        </span>
      </div>
    );
  }

  if (selectedType === "element") {
    return (
      <div className="flex items-center gap-4 rounded-md bg-white p-2 shadow-lg">
        <button className="border px-2 text-xs" onClick={onDelete}>
          Delete
        </button>
        <input
          type="color"
          className="h-7 w-7 border"
          value={selectedItem.backgroundColor || "#000000"} // Default to black
          onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
        />
        w:{" "}
        <input
          type="number"
          className="w-20 border px-2 py-1 text-xs"
          placeholder="Width"
          value={selectedItem.width || 50} // Default to 50 if undefined
          onChange={(e) =>
            onUpdate({
              width: parseInt(e.target.value, 10) || 50,
            })
          }
        />
        h:{" "}
        <input
          type="number"
          className="w-20 border px-2 py-1 text-xs"
          placeholder="Height"
          value={selectedItem.height || 50} // Default to 50 if undefined
          onChange={(e) =>
            onUpdate({
              height: parseInt(e.target.value, 10) || 50,
            })
          }
        />
        <span className="flex items-center gap-2">
          Radius:
          <input
            type="range"
            min="0"
            max="50"
            value={selectedItem.borderRadius || 0} // Default to 0 if undefined
            onChange={(e) =>
              onUpdate({
                borderRadius: parseInt(e.target.value, 10) || 0,
              })
            }
          />
          <span className="text-xs">{selectedItem.borderRadius || 0}px</span>
        </span>
        <span className="flex items-center gap-2">
          <button
            className="flex items-center border px-2 text-xs"
            onClick={
              () => onUpdate({ zIndex: (selectedItem.zIndex || 0) + 1 }) // Default to 0
            }
          >
            <FaArrowUp />
          </button>
          <button
            className="flex items-center border px-2 text-xs"
            onClick={
              () =>
                onUpdate({
                  zIndex: Math.max((selectedItem.zIndex || 0) - 1, 0),
                }) // Default to 0, prevent negative values
            }
          >
            <FaArrowDown />
          </button>
          <span className="text-xs">Z-Index: {selectedItem.zIndex || 0}</span>
        </span>
      </div>
    );
  }

  return null;
};

export default ControlPanel;
