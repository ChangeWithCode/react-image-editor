import { forwardRef } from "react";
const Image = forwardRef(
  ({ selectedImage, handleOnLoad, classes , size, formData }, ref) => {
    return (
      <img
      className={`${classes}`}
        src={selectedImage}
        ref={ref}
        onLoad={handleOnLoad}
        height={size.height}
        width={size.width}
        style={{
          filter: `brightness(${formData.Brightness}%)
              contrast(${formData.Contrast}%)
              grayscale(${formData.Grayscale}%)
              saturate(${formData.Saturate}%)`,
        }}
      />
    );
  }
);

export default Image;
