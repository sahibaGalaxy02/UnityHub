export default function Input(props) {
  return (
    <input
      {...props}
      className="w-full border p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
    />
  );
}