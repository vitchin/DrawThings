import {WhatsappLogo, TagChevronIcon} from "@phosphor-icons/react/dist/ssr";
import drawhand from "../../../public/hero.jpg";
import percent from "../../../public/percent.png";
import logo from "../../../public/logo.png";
import Image from "next/image";



export function Hero() {
    return (
        <section className="bg-gradient-to-br from-[#775d3a] via-[#a88b5c] to-[#e2cba0] shadow-lg text-white relative overflow-hidden items-center justify-center flex flex-col h-fit">

            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={drawhand}
                    alt="Imagem de materiais de desenho"
                    fill
                    sizes="100%"
                    priority
                    className="object-cover h-[300px] opacity-30 scale-x-[-1]"
                />
                <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
            </div>
            
            <div className="container mx-auto pt-16 pb-16 px-4 relative">

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                            Inspire sua criatividade com os melhores materiais de desenho!
                        </h1>
                        <p className="lg:text-lg">
                            Lápis, papéis, tintas e acessórios para artistas de todos os níveis. Produtos de alta qualidade para transformar suas ideias em arte!
                        </p>
                        <div>
                            <a href="#"
                            className="bg-amber-900 shadow-md px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                                <WhatsappLogo className="w-5 h-5" />
                                Fale conosco no WhatsApp
                            </a>
                        </div>

                        <div className="mt-8 mb-4 flex items-center gap-4">
                            <div className="w-fit hidden lg:block">
                                    <Image
                                        src={percent}
                                        alt="Imagem de um gato"
                                        className="object-fill rounded-2xl"
                                        quality={100}
                                        width={100}
                                    />
                            </div>
                            <p className="lg:text-lg mb-4"> de desconto na sua primeira compra</p>
                        </div>
                    </div>

                     <div className="hidden md:block h-full relative">
                        <Image
                            src={logo}
                            alt=""
                            className="object-contain"
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw"
                            quality={100}
                            priority
                        />
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