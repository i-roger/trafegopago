import Image from "next/image";
import aspas from "@/assets/images/double-quotes.svg";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* CARD INTRODUÇÃO */}
      <div className="flex md:justify-start my-20 px-4 md:my-[150px] md:mx-40">
        <div className="flex flex-col gap-4 w-[300px] md:w-[600px] p-4 border-2 rounded-xl border-[#ab3ed8]">
          <div className="flex gap-2">
            <h1 className="text-3xl break-normal">CANSADO DE POSTAR <span className="text-3xl break-normal text-[#ab3ed8]">E NÃO TER RETORNO?</span></h1>
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
          <p className="text-xl break-normal text-center">
            VAMOS CRIAR UMA <span className="text-[#ab3ed8]">ESTRATÉGIA</span> QUE <span className="text-[#ab3ed8]">ATRAI</span> <span className="text-[#ab3ed8]">CLIENTES</span> SEM ESFORÇO EXTRA!
          </p>
          <div className="flex justify-center">
            <button className="w-[300px] bg-[#00ffff] text-black rounded p-4 font-bold">
              Quero Contratar!
            </button>
          </div>
        </div>
      </div>
      {/* CARD INTRODUÇÃO */}

      <div className="flex justify-center gap-4">
        <div className="w-40 h-40 rounded-xl bg-[#00e5e5]"></div>
        <div className="w-40 h-40 rounded-xl bg-[#00ffff]"></div>
        <div className="w-40 h-40 rounded-xl bg-[#7f00b2]"></div>
        <div className="w-40 h-40 rounded-xl bg-[#ab3ed8]"></div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="w-40 h-40 border rounded-xl border-[#00e5e5]"></div>
        <div className="w-40 h-40 border rounded-xl border-[#00ffff]"></div>
        <div className="w-40 h-40 border rounded-xl border-[#7f00b2]"></div>
        <div className="w-40 h-40 border rounded-xl border-[#ab3ed8]"></div>
      </div>
    </div>
  );
}
