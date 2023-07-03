const Button = ({ onButtonClick, setShowImage }) => {
  return (
    <button
      class="inline-block rounded border mt-5 border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white "
      onMouseOver={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
      onClick={() => {
        onButtonClick();
      }}
    >
      Download
    </button>
  );
};

export default Button;
