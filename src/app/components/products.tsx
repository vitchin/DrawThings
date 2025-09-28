"use client"

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"
import {ChevronLeft, ChevronRight, Brush, PenTool, Square, Truck, Clock} from "lucide-react"
import { WhatsappLogo, TagChevronIcon } from "@phosphor-icons/react/dist/ssr"

const products = [
    {
        id: 1,
        title: "Quadro para Pintura",
        description: "Quadro profissional em tela de algodão, ideal para pinturas em óleo ou acrílica.",
        delivery: "Entrega em até 5 dias úteis",
        price: "R$ 120,00",
        icon: <Square />,
        linkText: "Comprar quadro",
    },
    {
        id: 2,
        title: "Pincel Profissional",
        description: "Pincel de cerdas naturais, perfeito para detalhes e acabamentos precisos.",
        delivery: "Entrega em até 3 dias úteis",
        price: "R$ 35,00",
        icon: <Brush />,
        linkText: "Comprar pincel",
    },
    {
        id: 3,
        title: "Caneta Nanquim",
        description: "Caneta nanquim resistente à água, ideal para ilustrações e desenhos técnicos.",
        delivery: "Entrega em até 2 dias úteis",
        price: "R$ 25,00",
        icon: <PenTool />,
        linkText: "Comprar caneta",
    }
]

export function Products() {
    
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
        <section className="relative bg w-full py-16 flex flex-col items-center justify-center">

            <div className="container mx-auto px-4 flex flex-col items-center justify-center">

                <h2 id="overflowProdutos" className="font-bold text-4xl text-center pb-8">Produtos</h2>

                <div className="relative w-full">
                    {/* Carrossel de produtos */}
                    
                    <div className="overflow-hidden py-4" ref={emblaRef}>
                        <div className="flex">
                            
                            {products.map((item, index) => (
                               <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3 ">
                                    <article className="bg-[#554a3b] text-white shadow-lg rounded-2xl p-6 space-y-4 h-60 flex flex-col justify-between">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div className="flex gap-4 justify-start items-center">
                                                <span className="text-3xl select-none">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl my-1 select-none">{item.title}</h3>
                                                    <p className="text-white text-sm select-none">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-100 pt-4 flex items-center justify-between select-none">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Truck className="w-5 h-5" />
                                                <span>{item.delivery}</span>
                                            </div>
                                            <span className="font-bold">{item.price}</span>
                                        </div>

                                        <a href="#" className="h-10 flex items-center justify-center gap-2 hover:bg-[#E84c3D] hover:text-white px-4 py-1 rounded-md duration-300">
                                            Comprar agora
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