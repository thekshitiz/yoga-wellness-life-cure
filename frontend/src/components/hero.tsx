import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-neutral-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neutral-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-soft-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-neutral-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-soft-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 empowering-title animate-fade-in-up">
            Embrace Your
            <span className="text-neutral-800 block mt-2">Inner Wellness</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 elegant-text animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover a sanctuary where modern wellness meets mindful living, 
            nurturing your body, mind, and spirit.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn-primary">
              Start Your Journey
            </button>
            <button className="btn-outline">
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="glass-effect p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform">
              <h3 className="text-neutral-900 font-semibold mb-2">Mind</h3>
              <p className="text-neutral-600">Find inner peace</p>
            </div>
            <div className="glass-effect p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform">
              <h3 className="text-neutral-900 font-semibold mb-2">Body</h3>
              <p className="text-neutral-600">Nurture strength</p>
            </div>
            <div className="glass-effect p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform">
              <h3 className="text-neutral-900 font-semibold mb-2">Spirit</h3>
              <p className="text-neutral-600">Awaken energy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

