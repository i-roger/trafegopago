
export default function CardIntro() {
    return (
        <div className="flex justify-center mt-4 px-4 md:justify-start md:mt-[150px] md:mx-40">
        <div className="flex flex-col gap-2 md:w-[600px] p-4 border-2 rounded-xl border-[#d946ef]">
          <div className="flex gap-2">
            <h1 className="text-3xl font-bold break-normal">
              CANSADO DE POSTAR{" "}
              <span className="text-3xl break-normal text-[#d946ef]">
                E NÃO TER RETORNO?
              </span>
            </h1>
          </div>
          <p className="break-normal">
            Uma cliente minha tentava de tudo nas redes, mas nada funcionava...
            Até que ela decidiu investir em uma estratégia de marketing digital
            que trouxe clientes de verdade.
          </p>
          <p className="text-lg break-normal ">
            Chegou a sua vez de atrair clientes sem esforço.
          </p>
          <p className="text-xl font-bold break-normal">
            VAMOS CRIAR UMA <span className="text-[#ab3ed8]">ESTRATÉGIA</span>{" "}
            QUE <span className="text-[#ab3ed8]">ATRAI</span>{" "}
            <span className="text-[#ab3ed8]">CLIENTES</span> SEM ESFORÇO EXTRA!
          </p>
          <div className="flex justify-center py-4">
            <div className="relative inline-flex  group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                href="#"
                title="Quero Contratar!"
                className="relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white transition-all duration-200 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Quero Contratar!
              </a>
            </div>
        </div>
        </div>
      </div>
    )
}