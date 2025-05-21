const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-pink-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-pink-600 mb-6">Get in Touch</h3>
        <p className="text-gray-700 mb-8">Want to place a custom order or ask a question? Fill out the form below!</p>

        <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 color: bg-pink-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 color: bg-pink-400"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 color: bg-pink-300"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
