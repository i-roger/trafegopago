import Image from "next/image"
import EmpresaWD from "@/assets/images/clientes/empresa-wd.png"

export default function Clientes() {
    return(
        <div className="flex flex-col items-center gap-4">

            <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl text-white font-bold">Empresa WD</h1>
                <div className="w-[650px] bg-[#00ffff] rounded-xl hover:bg-[#121214]">
                <Image 
                    className="rounded-xl w-[650px] opacity-50 hover:opacity-100 cursor-pointer"
                    alt="Empresa WD" src={EmpresaWD}
                />
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl text-white font-bold">Empresa WD</h1>
                <div className="w-[650px] bg-[#00ffff] rounded-xl hover:bg-[#121214]">
                <Image 
                    className="rounded-xl w-[650px] opacity-50 hover:opacity-100 cursor-pointer"
                    alt="Empresa WD" src={EmpresaWD}
                />
                </div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl text-white font-bold">Empresa WD</h1>
                <div className="w-[650px] bg-[#00ffff] rounded-xl hover:bg-[#121214]">
                <Image 
                    className="rounded-xl w-[650px] opacity-50 hover:opacity-100 cursor-pointer"
                    alt="Empresa WD" src={EmpresaWD}
                />
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl text-white font-bold">Empresa WD</h1>
                <div className="w-[650px] bg-[#00ffff] rounded-xl hover:bg-[#121214]">
                <Image 
                    className="rounded-xl w-[650px] opacity-50 hover:opacity-100 cursor-pointer"
                    alt="Empresa WD" src={EmpresaWD}
                />
                </div>
            </div>

        </div>
    )
}