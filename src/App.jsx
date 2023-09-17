import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections';
import Nav from './components/Nav';

const App = () => {
  return (
    <main id="main" className="relative">
      <Nav />
      <section id="home" className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section id="products" className="padding">
        <PopularProducts />
      </section>
      <section id="about-us" className="padding">
        <SuperQuality />
      </section>
      <section id="services" className="padding py-10">
        <Services />
      </section>
      <section id="special-offer" className="padding">
        <SpecialOffer />
      </section>
      <section id="reviews" className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section id="contact-us" className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section id="footer" className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
