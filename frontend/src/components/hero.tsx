import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-green-50">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/yoga-hero-bg.jpg"
          alt="Yoga Wellness Background"
          fill
          className="object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Pioneer Lifestyle Medical Center
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We harmonize evidence-based medicine with the ancient wisdom of Ayurveda and Yoga for your complete well-being.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors">
            Book Now
          </button>
          <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

