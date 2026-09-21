type ButtonProps = {
  text: "Submit" | "Add to Cart";
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  text,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
    >
      {text}
    </button>
  );
}