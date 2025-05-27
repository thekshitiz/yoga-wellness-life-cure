import Image from 'next/image';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/images/about-wellness.jpg"
              alt="Wellness Center"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Approach
            </h3>
            <p className="text-gray-600 mb-6">
              We believe that most chronic noncommunicable diseases (NCDs) can be prevented and managed through lifestyle adjustments. Our comprehensive lifestyle interventions encompass diet and nutrition, exercise, stress management, de-addiction, spirituality, relaxation, and more.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Facilities
            </h3>
            <p className="text-gray-600 mb-6">
              Our specialized wellness center is equipped to provide personalized care, whether you're seeking to address specific health conditions or simply enhance your well-being. We offer a range of specific and comprehensive lifestyle packages tailored for both diseased and healthy individuals.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-green-600">500+</h4>
                <p className="text-gray-600">Participants Served</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-green-600">20+</h4>
                <p className="text-gray-600">Expert Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 