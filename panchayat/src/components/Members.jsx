export default function Members({ members }) {
  return (
    <section className="p-6">
      <h2 className="text-xl font-bold text-center mb-4">Panchayat Members</h2>
      <ul className="max-w-md mx-auto bg-white shadow rounded-lg divide-y">
        {members.map((member) => (
          <li key={member.id} className="p-3">
            <span className="font-bold">{member.name}</span> - {member.role}
          </li>
        ))}
      </ul>
    </section>
  );
}