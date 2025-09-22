
import {} from "../../../public/golden.png"
import {} from "../../../public/primier.png"
import {} from "../../../public/royal.png"
import {} from "../../../public/natural.png"
import {} from "../../../public/whiskas.png"


const brands = [
    {name: "Royal Canin", image: "../../../public/royal.png"},
    {name: "Golden", image: "../../../public/golden.png"},
    {name: "Primier", image: "../../../public/primier.png"},
    {name: "Formula Natural", image: "../../../public/natural.png"},
    {name: "Whiskas", image: "../../../public/whiskas.png"}
]

export function Footer() {
    return (
        <section className="bg-[#E84c3d] py-16 text-white">
            <div className="container mx-auto px-4">

                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center">
                        Marcas Parceiras
                    </h4>

                    <div className="flex">
                        
                    </div>
                </div>
            </div>
        </section>
    )  
}