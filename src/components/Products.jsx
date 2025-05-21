import injectorImg from '../assets/images/injector.avif';
import marshmallowImg from '../assets/images/marshmellow.webp';
import strawberryImg from '../assets/images/strawberry.jpg';

const products = [
  {
    name: 'Strawberries',
    description: 'Covered in White Chocolate, Milk Chocolate, Almonds, or Fruity Pebbles!',
    image: strawberryImg,
  },
  {
    name: 'Marshmallows',
    description: 'White marshmallows covered in Dark Chocolate or White chocolate!',
    image: marshmallowImg,
  },
  {
    name: 'Injectors',
    description: 'Add injectors into your fruit or on the side with choices of Tito\'s Vodka, Hennessy, or Pink Champagne!',
    image: injectorImg,
  },
];

const Products = () => {
  return (
    <section id="treats" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">Our Treats</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-pink-50 rounded-lg shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-pink-700 mb-2">{product.name}</h4>
                <p className="text-gray-700">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;