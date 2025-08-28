export default function About({ about }) {
  return (
    <section className="p-6 bg-gray-100 text-center">
      <h2 className="text-xl font-bold mb-2">About Us</h2>
      <p className="max-w-2xl mx-auto">{about}</p>
    </section>
  );
}