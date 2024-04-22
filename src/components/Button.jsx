// eslint-disable-next-line react/prop-types
export default function Button({ children, variant, ...props }) {
  // Switch statement for multiple variants of the button
  const variantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 ";
      case "outline":
        return "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 ";
      case "ghost":
        return "bg-transparent hover:bg-blue-500 hover:text-white text-blue-500 px-6 py-3 ";
      case "link":
        return "bg-transition underline underline-offset-2";
      default:
        return "bg-gray-200 hover:bg-gray-300 text-black px-6 py-3 ";
    }
  };

  return (
    <button
      className={`rounded ${variantClasses()} transition duration-300 ease-in-out`}
      {...props} // Spread additional props to the button
    >
      {children}
    </button>
  );
}
