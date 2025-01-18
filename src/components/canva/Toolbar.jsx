const Toolbar = ({ onAddHeading, onAddElement }) => {
  return (
    <aside className="flex min-h-screen w-1/5 flex-col border bg-gray-50">
      <button
        className="text-md cursor-pointer border-b-[1px] p-2"
        onClick={onAddHeading}
      >
        Add Heading
      </button>
      <button
        className="text-md cursor-pointer border-b-[1px] p-2"
        onClick={onAddElement}
      >
        Add Element
      </button>
    </aside>
  );
};

export default Toolbar;
