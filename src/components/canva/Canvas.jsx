import React from "react";
import Draggable from "react-draggable";
import { CiCirclePlus } from "react-icons/ci";
import { ResizableBox } from "react-resizable";

const Canvas = ({
  headings,
  elements,
  onHeadingSelect,
  onElementSelect,
  onHeadingUpdate,
  onElementUpdate,
}) => {
  return (
    <div className="relative flex flex-1 items-center justify-center">
      {headings.length === 0 && elements.length === 0 && (
        <CiCirclePlus className="absolute z-0 text-[300px] opacity-35" />
      )}

      {headings.map((heading) => (
        <Draggable key={heading.id}>
          <div
            className="group relative"
            onClick={() => onHeadingSelect(heading.id)}
          >
            <div
              contentEditable
              suppressContentEditableWarning
              className={`cursor-move ${heading.bold ? "font-bold" : ""}`}
              style={{ fontSize: `${heading.fontSize}px` }}
              onBlur={(e) =>
                onHeadingUpdate(heading.id, { text: e.target.textContent })
              }
            >
              {heading.text}
            </div>
          </div>
        </Draggable>
      ))}

      {elements.map((element) => (
        <Draggable key={element.id}>
          <div
            className="group relative"
            onClick={() => onElementSelect(element.id)}
            style={{ zIndex: element.zIndex, position: "relative" }}
          >
            <ResizableBox
              width={element.width}
              height={element.height}
              minConstraints={[50, 50]}
              maxConstraints={[500, 500]}
              resizeHandles={["se"]}
              onResizeStop={(e, data) =>
                onElementUpdate(element.id, {
                  width: data.size.width,
                  height: data.size.height,
                })
              }
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: element.backgroundColor,
                  borderRadius: `${element.borderRadius}px`,
                }}
              ></div>
            </ResizableBox>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Canvas;
