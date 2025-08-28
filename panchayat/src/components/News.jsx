export default function News({ posts }) {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold text-center mb-4">News & Updates</h2>
      <div className="grid gap-4 max-w-3xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}