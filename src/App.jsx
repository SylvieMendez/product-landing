import Contact from './components/Contact';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Products from './components/Products';

function App() {
  return (
    <div className="relative">
      <Header />
      <main className="relative z-10">
        <Hero />
        <Products />
        <Pricing />
        <Delivery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
