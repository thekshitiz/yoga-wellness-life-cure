import Image from 'next/image';

const packages = [
  {
    title: "60 Day Therapeutic Yoga & Ayurveda Panchakarma Training",
    image: "/images/package-1.jpg",
    description: "Comprehensive program combining therapeutic yoga with traditional Ayurvedic treatments for deep healing and transformation."
  },
  {
    title: "28 Day Therapeutic Yoga & Ayurveda Therapy Training",
    image: "/images/package-2.jpg",
    description: "Intensive program focusing on yoga therapy and Ayurvedic principles for holistic health management."
  },
  {
    title: "200 Hours Ayurveda Massage and Panchakarma Therapy Training",
    image: "/images/package-3.jpg",
    description: "Professional training in traditional Ayurvedic massage techniques and Panchakarma therapies."
  }
];

const Packages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Packages</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <div className="relative h-64">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {pkg.description}
                </p>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-block bg-transparent border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
            View More Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages; 