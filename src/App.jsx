import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import WhyChooseUs from "./components/WhyChooseUs";
import Applications from "./components/Applications";
import Gallery from "./components/Gallery";
import About from "./components/About";
import TrustSection from "./components/TrustSection";
import DealerCTA from "./components/DealerCTA";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Product />
        <WhyChooseUs />
        <Applications />
        <Gallery />
        <About />
        <TrustSection />
        <DealerCTA />
        <EnquiryForm />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
