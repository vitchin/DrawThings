import Image from "next/image";
import aboutImg from "../../../public/about-1.png";
import aboutImg2 from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative">
                        
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={aboutImg}
                                alt="foto de um cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                            <Image
                                src={aboutImg2}
                                alt="foto de um cachorro"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    
                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">Sobre</h2>

                        <p>
                            Somos uma empresa especializada em cuidados para pets, oferecendo serviços de banho e tosa com profissionais qualificados e apaixonados por animais. Nosso objetivo é proporcionar o melhor atendimento e conforto para o seu pet, garantindo que ele saia sempre limpo e feliz.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Profissionais qualificados e apaixonados por animais
                            </li>
                            
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Mais de 10 anos de experiência no mercado
                            </li>
                            
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade e conforto para o seu pet
                            </li>
                        </ul>

                        <div className="flex gap-2 ">
                            <a href="#" className="bg-[#E84c3D] text-white flex itemso-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                            <WhatsappLogo className="w-5 h-5 text-white"/>
                            Contato via WhatsApp
                        </a>

                        <a href="#" className="flex itemso-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                            <MapPin className="w-5 h-5 text-black"/>
                            Endereço da loja
                        </a>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    )
}