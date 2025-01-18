import React, { useEffect, useRef, useState } from "react";
import "react-resizable/css/styles.css";
import Canvas from "../components/Canva/Canvas";
import ControlPanel from "../components/Canva/ControlPanel";
import Toolbar from "../components/Canva/Toolbar";
const Edit = () => {
  const [headings, setHeadings] = useState([]);
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const canvasRef = useRef(null);

  const addHeading = () => {
    setHeadings([
      ...headings,
      { id: Date.now(), text: "New Heading", fontSize: 16, bold: false },
    ]);
  };

  const addElement = () => {
    setElements([
      ...elements,
      { id: Date.now(), width: 150, height: 150, backgroundColor: "#ddd" },
    ]);
  };

  const updateHeading = (id, changes) => {
    setHeadings((prev) =>
      prev.map((heading) =>
        heading.id === id ? { ...heading, ...changes } : heading,
      ),
    );
  };

  const updateElement = (id, changes) => {
    setElements((prev) =>
      prev.map((element) =>
        element.id === id ? { ...element, ...changes } : element,
      ),
    );
  };

  const deleteItem = () => {
    if (selectedType === "heading") {
      setHeadings((prev) =>
        prev.filter((heading) => heading.id !== selectedId),
      );
    } else if (selectedType === "element") {
      setElements((prev) =>
        prev.filter((element) => element.id !== selectedId),
      );
    }
    setSelectedId(null);
    setSelectedType(null);
  };

  const selectedItem =
    selectedType === "heading"
      ? headings.find((heading) => heading.id === selectedId)
      : elements.find((element) => element.id === selectedId);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (canvasRef.current && !canvasRef.current.contains(event.target)) {
        setSelectedId(null);
        setSelectedType(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen">
      <Toolbar onAddHeading={addHeading} onAddElement={addElement} />
      <div className="relative mx-2 flex flex-1 flex-col rounded-lg border-4 border-dashed bg-pink-100">
        {selectedId && (
          <ControlPanel
            selectedType={selectedType}
            selectedItem={selectedItem}
            onUpdate={(changes) =>
              selectedType === "heading"
                ? updateHeading(selectedId, changes)
                : updateElement(selectedId, changes)
            }
            onDelete={deleteItem}
          />
        )}
        <Canvas
          headings={headings}
          elements={elements}
          onHeadingSelect={(id) => {
            setSelectedId(id);
            setSelectedType("heading");
          }}
          onElementSelect={(id) => {
            setSelectedId(id);
            setSelectedType("element");
          }}
          onHeadingUpdate={updateHeading}
          onElementUpdate={updateElement}
        />
      </div>
    </div>
  );
};

export default Edit;
