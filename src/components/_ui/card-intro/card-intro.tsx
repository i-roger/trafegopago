import Image from "next/image";
import aspas from "@/assets/images/double-quotes.svg"

export default function CardIntro() {
    return (
        <div className="flex md:justify-start my-20 px-4 md:mt-[150px] md:mx-40">
        <div className="flex flex-col gap-4 w-[300px] md:w-[600px] p-4 border-2 rounded-xl border-[#ab3ed8]">
          <div className="flex gap-2">
            <h1 className="text-3xl font-bold break-normal">
              CANSADO DE POSTAR{" "}
              <span className="text-3xl break-normal text-[#ab3ed8]">
                E NÃO TER RETORNO?
              </span>
            </h1>
          </div>
          <Image alt="" className="" src={aspas} />
          <p className="text-xl break-normal">
            Uma cliente minha tentava de tudo nas redes, mas nada funcionava...
            Até que ela decidiu investir em uma estratégia de marketing digital
            que trouxe clientes de verdade.
          </p>
          <p className="text-xl break-normal text-center">
            Chegou a sua vez de atrair clientes sem esforço.
          </p>
          <p className="text-xl font-bold break-normal text-center">
            VAMOS CRIAR UMA <span className="text-[#ab3ed8]">ESTRATÉGIA</span>{" "}
            QUE <span className="text-[#ab3ed8]">ATRAI</span>{" "}
            <span className="text-[#ab3ed8]">CLIENTES</span> SEM ESFORÇO EXTRA!
          </p>
          <div className="flex justify-center">
            <button className="w-[300px] bg-[#00ffff] text-black rounded p-4 font-bold">
              Quero Contratar!
            </button>
          </div>
        </div>
      </div>
    )
}