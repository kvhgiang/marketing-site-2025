export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2">Fast</h3>
          <p>Optimized for blazing fast load times and performance.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Responsive</h3>
          <p>Mobile-first design that looks great on any device.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Modern</h3>
          <p>Built with the latest technologies including Next.js and Tailwind.</p>
        </div>
      </div>
    </section>
  );
}
