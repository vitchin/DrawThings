import { TagChevronIcon } from "@phosphor-icons/react/dist/ssr";
import drawhand from "../../../public/hero.jpg";
import phone from "../../../public/whatsapp.svg";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden text-[#752f00] flex flex-col items-center justify-center h-fit">

      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center space-x-10 gap-4 text-gray-800 text-sm font-medium">
          <a href="#ProductSection" className="m-0 w-fit hover:text-gray-900 transition-colors">Produtos</a>
          <a href="#aboutSection" className="m-0 w-fit hover:text-gray-900 transition-colors">Sobre a loja</a>
          <a href="#testimonialSection" className="m-0 w-fit hover:text-gray-900 transition-colors">Depoimentos</a>
          <a href="#SuportSection" className="m-0 w-fit hover:text-gray-900 transition-colors">Suporte</a>
        </div>
      </nav>

      <div className="absolute inset-0 -z-10">
        <Image
          src={drawhand}
          alt="Materiais de desenho"
          fill
          priority
          className="object-cover w-full h-full scale-x-[-1] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
      </div>

      <div className="container mx-auto pt-[120px] pb-20 px-4 relative">
        <article className="lg:w-full space-y-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl text-[#752f00] text-center max-w-[700px] font-bold leading-10 ">
            Inspire sua criatividade com os melhores materiais de desenho!
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lápis, papéis, tintas e acessórios para artistas de todos os níveis. Produtos de alta qualidade para transformar suas ideias em arte.
          </p>
          <div>
            <a
              href="#"
              className="bg-[#e94d4d] hover:bg-[#b22e25] w-fit transition-all duration-300 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg flex items-center justify-center gap-2"
            >
              <Image src={phone} alt="WhatsApp" className="h-5 w-5" />
              Fale conosco no WhatsApp
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
