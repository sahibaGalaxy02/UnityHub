export default function HelpCard({ title, description }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="text-blue-600 mt-2">Offer Help</button>
    </div>
  );
}