import { About } from "./components/about";
import { Hero } from "./components/hero";
import { Products } from "./components/products";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <Footer />
    </main>
  )
}