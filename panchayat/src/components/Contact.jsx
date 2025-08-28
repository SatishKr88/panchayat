export default function Contact({ contact }) {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold text-center mb-4">Contact Us</h2>
      <div className="text-center">
        <p>📞 <a href={`tel:${contact.phone}`} className="text-blue-600 underline">{contact.phone}</a></p>
        <p>📧 <a href={`mailto:${contact.email}`} className="text-blue-600 underline">{contact.email}</a></p>

        <p>
          📍 <a
            href={`https://www.google.com/maps/search/?q=${encodeURIComponent(contact.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {contact.address}
          </a>
        </p>

      </div>
    </section>
  );
}