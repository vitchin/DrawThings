"use client"

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"
import {ChevronLeft, ChevronRight} from "lucide-react"
import tutor1 from "../../../public/tutor1.png";
import tutor2 from "../../../public/Geovanna.png";

const testimonials = [
    {
        content: "Comprei um quadro para pintura e fiquei impressionada com a qualidade da tela e da estrutura. O atendimento foi excelente e o produto chegou bem embalado, dentro do prazo. Recomendo para quem busca materiais profissionais!",
        author: "Beatriz Lima",
        role: "Artista Plástica",
        image: tutor2,
    },
    {
        content: "Os pincéis são incríveis! As cerdas são macias e perfeitas para detalhes. A loja foi super ágil na entrega e ainda me enviaram dicas de conservação dos materiais. Com certeza voltarei a comprar.",
        author: "Carlos Mendes",
        role: "Ilustrador",
        image: tutor1,
    }
]

export function Testimonials() {
    
    const  [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return(
        <section className="bg-[#443131] py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-center font-bold text-4xl mb-12 text-white">Depoimentos de clientes</h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Carrossel de depoimentos */}
                    <div className="overflow-hidden py-4" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                               <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-[#1b110e] text-white rounded-2xl py-8 px-15 space-y-6 h-full flex flex-col justify-between shadow-lg">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes="96px"
                                                    className="rounded-full object-cover"
                                                    quality={100}
                                                />
                                            </div>
                                            <p className="text-gray-200 text-base">{item.content}</p>
                                            <div>
                                                <p className="font-bold text-lg text-[#FFD449]">{item.author}</p>
                                                <p className="text-sm text-gray-400">{item.role}</p>
                                            </div>
                                            <div className="w-full flex flex-row items-center justify-center gap-2">
                                                <Image src={"/star-fill.svg"} alt="star" width={35} height={35} />
                                                <Image src={"/star-fill.svg"} alt="star" width={35} height={35} />
                                                <Image src={"/star-fill.svg"} alt="star" width={35} height={35} />
                                                <Image src={"/star-fill.svg"} alt="star" width={35} height={35} />
                                                <Image src={"/star-fill.svg"} alt="star" width={35} height={35} />
                                            </div>
                                        </div>
                                    </article>
                               </div> 
                            ))}
                        </div>
                    </div>
                    <button onClick={scrollPrev} className="bg-white flex items-center justify-center rounded-full shadow-lg w-12 h-12 absolute left-3 translate-y-1/2 -translate-x-1/2 top-1/3 z-10">
                        <ChevronLeft className="w-7 h-7 text-[#443131]" />
                    </button>
                    <button onClick={scrollNext} className="bg-white flex items-center justify-center rounded-full shadow-lg w-12 h-12 absolute -right-6 translate-y-1/2 -translate-x-1/2 top-1/3 z-10">
                        <ChevronRight className="w-7 h-7 text-[#443131]" />
                    </button>
                </div>
            </div>
        </section>
    )
}