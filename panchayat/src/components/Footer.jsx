export default function Footer({ social }) {
  return (
    <footer className="bg-green-700 text-white p-4 text-center">
      <p>Follow Us:</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href={social.facebook} target="_blank" rel="noreferrer">Facebook</a>
        <a href={social.twitter} target="_blank" rel="noreferrer">Twitter</a>
      </div>
      <p className="mt-2 text-sm">&copy; 2025 Gram Panchayat Greenfield</p>
    </footer>
  );
}