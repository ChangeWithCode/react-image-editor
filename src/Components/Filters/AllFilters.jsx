import Filters from "./Filters";
const AllFilters = ({formData , handleChange }) => {
  return (
    <div className="mx-auto max-w-lg">
      <form
        action=""
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <div>
          <Filters
            value={formData.Brightness}
            handleChange={handleChange}
            text="Brightness"
            max="200"
          ></Filters>
          <Filters
            value={formData.Contrast}
            handleChange={handleChange}
            text="Contrast"
            max="200"
          ></Filters>
          <Filters
            value={formData.Grayscale}
            handleChange={handleChange}
            text="Grayscale"
            max={100}
          ></Filters>
          <Filters
            value={formData.Saturate}
            handleChange={handleChange}
            text="Saturate"
            max="200"
          ></Filters>
        </div>
      </form>
    </div>
  );
};

export default AllFilters;
