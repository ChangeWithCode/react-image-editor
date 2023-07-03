const Fileinput = ({ handleImageChange }) => {
  return (
    <div className="relative">
      <input
        type="file"
        onChange={handleImageChange}
        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        placeholder="Upload Image"
      />
    </div>
  );
};

export default Fileinput;
