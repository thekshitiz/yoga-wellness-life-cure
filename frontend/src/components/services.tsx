import Image from 'next/image';

const services = [
  {
    title: "Ayurveda Treatments and Panchakarma",
    image: "/images/ayurveda.jpg",
    description: "Traditional healing therapies for holistic wellness and detoxification"
  },
  {
    title: "Lifestyle Medicine",
    image: "/images/lifestyle.jpg",
    description: "Evidence-based approach to prevent and treat chronic diseases"
  },
  {
    title: "Rehabilitation",
    image: "/images/rehabilitation.jpg",
    description: "Comprehensive recovery programs for improved quality of life"
  },
  {
    title: "Yoga Retreats and Yoga Treks",
    image: "/images/yoga-retreat.jpg",
    description: "Immersive experiences combining yoga with nature"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 