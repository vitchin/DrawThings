import Image from "next/image";
import golden from "../../../public/golden.png"
import royal from "../../../public/primier.png"
import primier from "../../../public/royal.png"
import whiskas from "../../../public/natural.png"
import natural from "../../../public/whiskas.png"


const brands = [
    {name: "Royal Canin", image: royal},
    {name: "Golden", image: golden},
    {name: "Primier", image: primier},
    {name: "Formula Natural", image: natural},
    {name: "Whiskas", image: whiskas}
]

export function Footer() {
    return (
        <section id="SuportSection" className="bg-[#1b110e] py-16 text-white">
            <div className="container mx-auto px-4">
                <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-[#FFD449]">Loja de arte</h4>
                        <p className="text-gray-200 mb-2">
                            Inspiração e qualidade para artistas de todos os níveis. Produtos selecionados, entrega rápida e atendimento especializado.
                        </p>
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Todos os direitos reservados.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#FFD449]">Contato</h4>
                        <ul className="space-y-2 text-gray-200">
                            <li>Email: contato@drawthings.com.br</li>
                            <li>WhatsApp: (11) 99999-9999</li>
                            <li>Endereço: Rua da Criatividade, 123 - São Paulo/SP</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#FFD449]">Informações</h4>
                        <ul className="space-y-2 text-gray-200">
                            <li><a href="#" className="hover:text-[#E84c3D] transition">Política de Privacidade</a></li>
                            <li><a href="#" className="hover:text-[#E84c3D] transition">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-[#E84c3D] transition">Trocas e Devoluções</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    )
}