"use client"

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock} from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import tutor1 from "../../../public/tutor1.png";
import tutor2 from "../../../public/Geovanna.png";

const testimonials = [
    {
        content: "O serviço de banho e tosa foi excelente! Meu cachorro saiu limpo, cheiroso e muito feliz. Os profissionais foram super atenciosos, explicaram todo o processo e deram dicas de cuidados para o dia a dia. Recomendo muito para quem busca qualidade e carinho com os pets!",
        author: "Maria Silva",
        role: "tutora do Rex (Shih Tzu)",
        image: tutor2,
    },
    {
        content: "Meu gato estava precisando de um banho e tosa, e fiquei muito satisfeita com o atendimento. A equipe foi paciente, cuidadosa e deixou a Luna tranquila durante todo o procedimento. O resultado ficou ótimo e com certeza voltarei outras vezes!",
        author: "Ana Souza",
        role: "tutora da Luna (Persa)",
        image: tutor2,
    },
    {
        content: "A equipe é muito profissional e cuidadosa. Meu cachorro sempre sai feliz, bem tratado e com o pelo impecável. Gosto muito da atenção que dão aos detalhes e da preocupação com o bem-estar dos animais. Serviço de confiança!",
        author: "João Pereira",
        role: "tutor do Max (Golden Retriever)",
        image: tutor1,
    },
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
        <section className="bg-[#FFD449] py-16">

            <div className="container mx-auto px-4">
                <h2 className="text-center font-bold text-4xl mb-12">Recomendações dos nossos clientes</h2>

                <div className="relative max-w-4xl mx-auto">
                     {/*aqui vai ter um carrossel*/}
                    
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            
                            {testimonials.map((item, index) => (
                               <div key={index} className="flex-[0_0_100%] min-w-0 px-3">

                                    <article className="bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col justify-between">
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

                                                <p className="text-gray-200">{item.content}</p>
                                                
                                                <div>
                                                    <p className="font-bold">{item.author}</p>
                                                    <p className="text-sm text-gray-400">{item.role}</p>
                                                </div>
                                            </div>
                                    </article>

                               </div> 
                            ))}

                        </div>
                    </div>

                    <button onClick={scrollPrev} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 translate-y-1/2 -translate-x-1/2 top-1/3 z-10">
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <button onClick={scrollNext} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 translate-y-1/2 -translate-x-1/2 top-1/3 z-10">
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

            </div>

        </section>
    )
}