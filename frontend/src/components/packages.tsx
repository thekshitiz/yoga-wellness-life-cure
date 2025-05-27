import Image from 'next/image';

const packages = [
  {
    title: "Wellness Starter",
    image: "/images/starter.jpg",
    description: "Perfect for those beginning their wellness journey. Includes basic health assessment and personalized plan."
  },
  {
    title: "Lifestyle Transformation",
    image: "/images/transformation.jpg",
    description: "Comprehensive program for sustainable lifestyle changes and long-term health improvements."
  },
  {
    title: "Executive Wellness",
    image: "/images/executive.jpg",
    description: "Tailored for busy professionals, focusing on stress management and work-life balance."
  }
];

const Packages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Packages</h2>
          <div className="w-20 h-1 bg-neutral-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-neutral-200">
              <div className="relative h-64">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {pkg.title}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {pkg.description}
                </p>
                <button className="w-full bg-neutral-900 text-neutral-50 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-block border-2 border-neutral-900 text-neutral-900 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-900 hover:text-neutral-50 transition-colors">
            View More Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages; 