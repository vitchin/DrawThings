"use client"

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock} from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

const services = [
    {
        id: 1,
        title: "Banho",
        description: "Serviço de banho completo com produtos de alta qualidade.",
        duration: "1 hora",
        price: "R$ 50,00",
        icon: <Scissors />,
        linkText: "Agendar banho",
    },
    {
        id: 2,
        title: "Tosa",
        description: "Tosa higiênica e estética, com profissionais qualificados.",
        duration: "1 hora e 30 minutos",
        price: "R$ 80,00",
        icon: <Syringe />,
        linkText: "Agendar tosa",
    },
    {
        id: 3,
        title: "Transporte",
        description: "Transporte seguro e confortável para o seu pet.",
        duration: "Variável",
        price: "R$ 30,00",
        icon: <CarTaxiFront />,
        linkText: "Agendar transporte",
    }
]

export function Services() {
    
    const  [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)" : {slidesToScroll: 3}
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return(
        <section className="bg-white py-16">

            <div className="container mx-auto px-4">
                <h2 className="font-bold text-4xl mb-12">Serviços</h2>

                <div className="relative">
                     {/*aqui vai ter um carrossel*/}
                    
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            
                            {services.map((item, index) => (
                               <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">

                                    <article className="bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col justify-between">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div className="flex gap-4 justify-start items-center">
                                                <span className="text-3xl select-none">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl my-1 select-none">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between select-none">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-5 h-5" />
                                                <span>{item.duration}</span>
                                            </div>
                                        </div>

                                        <a href="#" className="h-10 flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300">
                                            Entrar em contato
                                            <WhatsappLogo className="w-5 h-5" />
                                        </a>
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