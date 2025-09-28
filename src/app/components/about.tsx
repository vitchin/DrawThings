import Image from "next/image";
import aboutImg from "../../../public/canetaPapel.jpg";
import aboutImg2 from "../../../public/materiaisDesenho.jpg";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#f7ebd9] py-16">
            <div className="container px-4 mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative">
                        
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={aboutImg}
                                alt="Materiais de arte: caneta e papel"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                            <Image
                                src={aboutImg2}
                                alt="Materiais de desenho"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    
                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">Sobre a loja</h2>

                        <p>
                            Somos uma loja virtual especializada em materiais de arte e desenho. Oferecemos uma seleção de produtos de alta qualidade para artistas, ilustradores e amantes da criatividade. Nosso objetivo é inspirar e facilitar o processo artístico, proporcionando os melhores materiais e atendimento personalizado.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Produtos selecionados para todos os níveis de artistas
                            </li>
                            
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Atendimento especializado e suporte online
                            </li>
                            
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Entrega rápida para todo o Brasil
                            </li>
                        </ul>

                        <div className="flex gap-2 ">
                            <a href="#" className="bg-[#E84c3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <WhatsappLogo className="w-5 h-5 text-white"/>
                                Fale conosco no WhatsApp
                            </a>

                            <a href="#" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <MapPin className="w-5 h-5 text-black"/>
                                Ver endereço da loja
                            </a>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    )
}