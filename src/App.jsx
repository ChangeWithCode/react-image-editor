import { useState, useRef, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { toPng } from "html-to-image";
import Image from "./Components/Image";
import Heading from "./Components/Heading";
import Fileinput from "./Components/FileInput";
import Button from "./Components/Button";
import AllFilters from "./Components/Filters/AllFilters";
function App() {
  const ref = useRef("");

  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });

  const [formData, setFormData] = useState({
    Brightness: 100,
    Contrast: 100,
    Grayscale: 0,
    Saturate: 100,
    blur: 0,
  });

  const [file, setFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    setFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnLoad = (event) => {
    setSize({
      height: event.target.naturalHeight,
      width: event.target.naturalWidth,
    });
  };

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
        setShowImage(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <>
      <div class="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8 grid grid-cols-2 gap-4">
        <div>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
              <Heading text="React Photo Editor"></Heading>

              <form
                action=""
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
              >
                <Fileinput handleImageChange={handleImageChange}></Fileinput>
              </form>
              <div className="mx-auto max-w-screen-xl  py-4 ">
                <Image
                  selectedImage={selectedImage}
                  size={size}
                  classes={""}
                  handleOnLoad={handleOnLoad}
                  formData={formData}
                ></Image>

                <Button
                  onButtonClick={onButtonClick}
                  setShowImage={setShowImage}
                ></Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  ">
            <AllFilters
              formData={formData}
              handleChange={handleChange}
            ></AllFilters>
          </div>
        </div>
      </div>
      <Image
        classes={showImage ? "" : "hidden"}
        selectedImage={selectedImage}
        ref={ref}
        size={size}
        formData={formData}
      ></Image>
    </>
  );
}

export default App;
