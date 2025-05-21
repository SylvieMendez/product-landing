const pricingOptions = [
  {
    pack: '6 Pack',
    items: [
      { name: 'Strawberries', price: '$12' },
      { name: 'Marshmallows', price: '$10' },
    ],
  },
  {
    pack: '12 Pack',
    items: [
      { name: 'Strawberries', price: '$20' },
      { name: 'Marshmallows', price: '$18' },
    ],
  },
  {
    pack: 'Injectors',
    items: [
      { name: 'Vodka', price: '$2 each' },
      { name: 'Hennessy', price: '$3 each' },
      { name: 'Champagne', price: '$2 each' },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-pink-100">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">Pricing</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingOptions.map((option) => (
            <div key={option.pack} className="bg-white rounded-lg shadow p-6">
              <h4 className="text-xl font-semibold text-pink-700 mb-4">{option.pack}</h4>
              <ul className="space-y-2">
                {option.items.map((item) => (
                  <li key={item.name} className="flex justify-between text-gray-700">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
