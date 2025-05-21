import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="bg-pink-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">
          Indulge in Sweet Delights
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          Chocolate-covered strawberries, marshmallows, and more!
        </p>
        <Link
          to="treats"
          smooth={true}
          duration={500}
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
        >
          Explore Treats
        </Link>
      </div>
    </section>
  );
};

export default Hero;
