const Delivery = () => {
  return (
    <section id="delivery" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-pink-600 mb-6">Delivery Information</h3>
        <p className="text-gray-700 text-lg">
          We offer <span className="font-semibold text-pink-700">FREE delivery</span> for orders of <span className="font-semibold">$20 and up</span>! Orders under $20 will incur a <span className="font-semibold">$5 delivery fee</span>.
        </p>
      </div>
    </section>
  );
};

export default Delivery;
