import {WhatsappLogo, TagChevronIcon} from "@phosphor-icons/react/dist/ssr";
import drawhand from "../../../public/hero.jpg";
import percent from "../../../public/percent.png";
import Image from "next/image";



export function Hero() {
    return (
        <section className="bg-[#fffcf3] shadow-lg text-[#752f00] relative overflow-hidden items-center justify-center flex flex-col h-fit">

            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={drawhand}
                    alt="Imagem de materiais de desenho"
                    fill
                    sizes="100%"
                    priority
                    className="object-fill h-[300px] scale-x-[-1]"
                />
            </div>
            
            <div className="container mx-auto pt-16 pb-16 px-4 relative">

                <article className="lg:w-[500px]">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                            Inspire sua criatividade com os melhores materiais de desenho!
                        </h1>
                        <p className="lg:text-lg">
                            Lápis, papéis, tintas e acessórios para artistas de todos os níveis. Produtos de alta qualidade para transformar suas ideias em arte!
                        </p>
                        <div>
                            <a href="#"
                            className="bg-[#e94d4d] text-white text-xl w-full h-16 shadow-md px-5 py-2 rounded-[50px] font-semibold flex items-center justify-center gap-2">
                                <WhatsappLogo className="w-7 h-7" />
                                Fale conosco no WhatsApp
                            </a>
                        </div>

                    </div>

                </article>

            </div>

            <div className="pb-4">
                <a href="#overflowProdutos" className="mb-4 flex items-center justify-center animate-bounce">
                    <TagChevronIcon className="w-8 h-8 text-white" style={{ transform: "rotate(90deg)" }}/>
                </a>

                <p className="text-white text-center">Confira nossos produtos</p>
            </div>

        </section>
    )
}