const Filters = ({ text, handleChange, value, max }) => {
  return (
    <div className="relative">
      <label for="customRange1" className="mb-2 inline-block text-black">
        {text}
      </label>
      <input
        type="range"
        name={text}
        defaultValue={value}
        onChange={handleChange}
        max={max}
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-black"
        id="customRange1"
      />
    </div>
  );
};

export default Filters;
