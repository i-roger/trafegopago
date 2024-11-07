import Image from "next/image";
import aspas from "@/assets/images/double-quotes.svg";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* CARD INTRODUÇÃO */}
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
      {/* CARD INTRODUÇÃO */}

{/* SEPARADOR */}
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-[700px] h-px my-8 border-0 bg-[#7f00b2]"/>
        <span className="absolute px-3 font-bold text-3xl text-white -translate-x-1/2 left-1/2 bg-[#121214]">
          Serviços
        </span>
      </div>
{/* SEPARADOR */}

      <div className="flex justify-center">
        <div className="w-[1071px] flex flex-col md:flex-row justify-center md:justify-evenly gap-4 md:gap-20 px-4">
          {/* BLOCO ESQUERDO */}
          <div className="flex flex-col items-center gap-4 md:gap-14">
            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                Gestão de mídias
              </h1>
              <p className="text-xl text-white">
                Nas redes sociais, sua marca se torna parte da vida dos
                clientes. Com uma pesquisa de mercado sólida e estratégias bem
                definidas, atraímos novos clientes e convertemos conexões em
                vendas reais.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                Campanhas e meta ADS
              </h1>
              <p className="text-xl text-white">
                Meta Ads são anúncios pagos no Facebook e Instagram que ajudam a
                converter seguidores em clientes e impulsionar vendas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                Google meu negócio
              </h1>
              <p className="text-xl text-white">
                O Google Meu Negócio ajuda a aumentar a visibilidade da sua
                empresa localmente, exibindo informações importantes como
                endereço, horário e avaliações no Google.
              </p>
            </div>
          </div>
          {/* BLOCO ESQUERDO */}

          {/* BLOCO DIREITO */}
          <div className="flex flex-col items-center gap-4 md:gap-14 md:pt-28">
            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                Consultoria de marketing
              </h1>
              <p className="text-xl text-white">
                Descubra como o marketing pode transformar sua empresa! Seja o
                CEO de uma marca que realmente vende, conquiste a confiança dos
                seus clientes e fidelize novos públicos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                Campanhas Google ADS
              </h1>
              <p className="text-xl text-white">
                Google Ads são estratégias criadas para impulsionar vendas e
                fortalecer sua marca na plataforma do Google.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                UX / UI Design
              </h1>
              <p className="text-xl text-white">
                UI/UX Design melhora a experiência e o visual de sites e apps,
                tornando- os mais intuitivos e agradáveis para o usuário.
              </p>
            </div>
          </div>
          {/* BLOCO DIREITO*/}
        </div>
      </div>

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
